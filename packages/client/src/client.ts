import { executeTgBotMethod, type ExecuteMethod, type ClientResult } from "./execute"

const TG_BOT_API_URL = "https://api.telegram.org"

export interface TgClientConfig {
  bot_token: string
  base_url?: string
}

export interface TgFile {
  readonly content: ArrayBuffer
  readonly file_name: string
  readonly base64String: () => string
  readonly file: () => File
}

export interface TgBotClient {
  readonly config: Required<TgClientConfig>
  readonly execute: ExecuteMethod
  readonly getFile: (input: { fileId: string; type?: string }) => Promise<ClientResult<TgFile>>
}

export function makeTgBotClient(config: TgClientConfig): TgBotClient {
  const tgConfig = {
    bot_token: config.bot_token,
    base_url: config.base_url ?? TG_BOT_API_URL
  }

  const execute: ExecuteMethod = (method, input) =>
    executeTgBotMethod({
      config: tgConfig, method, input: input as any
    })

  const getFile = async (params: { fileId: string; type?: string }): Promise<ClientResult<TgFile>> => {
    const response = await execute("get_file", { file_id: params.fileId })

    if (!response.ok) return response

    const file_path = response.data.file_path

    if (!file_path || file_path.length === 0) {
      return {
        ok: false,
        error: { _tag: "UnableToGetFile", cause: "File path not defined" }
      }
    }

    const file_name = file_path.replaceAll("/", "-")
    const url = `${tgConfig.base_url}/file/bot${tgConfig.bot_token}/${file_path}`

    let content: ArrayBuffer
    try {
      content = await fetch(url).then((_) => _.arrayBuffer())
    } catch (cause) {
      return { ok: false, error: { _tag: "UnableToGetFile", cause } }
    }

    const base64String = () => Buffer.from(content).toString("base64")
    const file = () =>
      new File([content], file_name, {
        ...(params.type ? { type: params.type } : {})
      })

    return {
      ok: true,
      data: { content, file_name, base64String, file }
    }
  }

  return {
    config: tgConfig,
    execute,
    getFile
  }
}
