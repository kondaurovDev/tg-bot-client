/**
 * @module main
 *
 * Entry point. Reads MODULE_NAME from env (`bot_api` or `webapp`) and runs
 * the corresponding code generation pipeline.
 */
import * as fs from "node:fs"
import * as path from "node:path"
import { Config, Effect, Logger, LogLevel } from "effect"

import { extractBotApiEntities, ExtractedWebApp } from "./scrape/entities"
import {
  BotApiCodeWriterService,
  PageProviderService,
  WebAppCodeWriterService
} from "./service/index"
import { MarkdownWriterService } from "./service/markdown"
import { BotApiCodegenRuntime, WebAppCodegenRuntime } from "./runtime"
import { TsMorpthWriter } from "./service/code-writers"

const generateBotApi = Effect.fn("generate bot api")(function* () {
  const pageProvider = yield* PageProviderService
  const apiPage = yield* pageProvider.api

  const apiVersion = yield* apiPage.getLatestVersion()

  const tsMorph = yield* TsMorpthWriter
  const codeWriter = yield* BotApiCodeWriterService
  const markdownWriter = yield* MarkdownWriterService
  const entities = yield* extractBotApiEntities(apiPage)

  codeWriter.writeTypes(entities.types)
  codeWriter.writeMethods(entities.methods)

  yield* markdownWriter.writeSpecification({
    ...entities,
    apiVersion
  })

  yield* tsMorph.saveFiles

  const pkgDir = path.resolve(import.meta.dirname, "..")
  fs.writeFileSync(
    path.resolve(pkgDir, "bot-api-version.json"),
    JSON.stringify({ version: apiVersion }, null, 2) + "\n"
  )

  const readmePath = path.resolve(pkgDir, "readme.md")
  const readme = fs.readFileSync(readmePath, "utf-8")
  fs.writeFileSync(
    readmePath,
    readme.replace(/BotApi-[\d.]+/, `BotApi-${apiVersion}`)
  )
})

const generateWebApp = Effect.fn("generate web app")(function* () {
  const pageProvider = yield* PageProviderService
  const webappPage = yield* pageProvider.webapp

  const webAppVersion = yield* webappPage.getLatestVersion()

  const tsMorph = yield* TsMorpthWriter
  const { writeWebApp } = yield* WebAppCodeWriterService

  const extractedWebApp = yield* ExtractedWebApp.make(webappPage)

  writeWebApp(extractedWebApp)

  yield* tsMorph.saveFiles

  const pkgDir = path.resolve(import.meta.dirname, "..")
  const readmePath = path.resolve(pkgDir, "readme.md")
  const readme = fs.readFileSync(readmePath, "utf-8")
  fs.writeFileSync(
    readmePath,
    readme.replace(/Telegram\.WebApp-[\w.]+/, `Telegram.WebApp-${webAppVersion}`)
  )
})

const gen = Effect.fn("Generate")(function* () {
  const module = yield* Config.literal("bot_api", "webapp")("MODULE_NAME")
  if (module == "bot_api") {
    yield* generateBotApi().pipe(Effect.provide(BotApiCodegenRuntime))
  } else {
    yield* generateWebApp().pipe(Effect.provide(WebAppCodegenRuntime))
  }
})

gen()
  .pipe(Logger.withMinimumLogLevel(LogLevel.Debug), Effect.runPromise)
  .then(() => console.log("done generating"))
