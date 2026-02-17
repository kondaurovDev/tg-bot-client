import { makeTgBotClient } from "@effect-ak/tg-bot-client"
import { loadConfig } from "./config"

async function main() {
  const config = loadConfig()
  const chatId = config.chatId

  const client = makeTgBotClient({
    bot_token: config.token
  })

  const result = await client.execute("send_message", {
    text: `hello, ${chatId}`,
    chat_id: chatId
  })

  if (!result.ok) {
    console.error("Error:", result.error._tag, result.error)
    process.exit(1)
  }

  console.log("Message sent successfully!")
}

main()
