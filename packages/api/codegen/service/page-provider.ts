/**
 * @module page-provider
 *
 * Fetches and caches Telegram documentation HTML pages.
 *
 * Downloads the Bot API and Mini Apps pages from `core.telegram.org`,
 * caches them as `input/api.html` and `input/webapp.html`, and returns
 * parsed {@link DocPage} / {@link WebAppPage} instances.
 */
import { Effect, Schedule } from "effect"
import { writeFile, readFile, mkdir } from "fs/promises"

import { DocPage, WebAppPage } from "~/scrape/page"

// ── HTML fetching ──

export type HtmlPageName = keyof typeof HtmlPages

const baseUrl = "https://core.telegram.org"

export const HtmlPages = {
  api: `${baseUrl}/bots/api`,
  webapp: `${baseUrl}/bots/webapps`
} as const

const getPageHtml = (page: HtmlPageName) =>
  Effect.tryPromise(async () => {
    const fileName = `input/${page}.html`
    const saved = await readFile(fileName).catch(() => undefined)
    if (saved) {
      console.log(`downloaded '${page}'`)
      return saved.toString("utf-8")
    }

    const content = await fetch(HtmlPages[page]).then((_) => _.text())

    await mkdir("input", { recursive: true })
    await writeFile(fileName, content)

    return content
  }).pipe(
    Effect.retry(
      Schedule.exponential("2 seconds").pipe(
        Schedule.compose(Schedule.recurs(3))
      )
    )
  )

// ── PageProviderService ──

export class PageProviderService extends Effect.Service<PageProviderService>()(
  "PageProviderService",
  {
    scoped: Effect.gen(function* () {
      yield* Effect.addFinalizer(() => Effect.logInfo("Closing scrapeDocPage"))

      yield* Effect.logInfo("init page provider")

      return {
        api: getPageHtml("api").pipe(Effect.andThen(DocPage.fromHtmlString)),
        webapp: getPageHtml("webapp").pipe(
          Effect.andThen(WebAppPage.fromHtmlString)
        )
      } as const
    })
  }
) {}
