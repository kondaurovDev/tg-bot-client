import { makeTgBotClient } from "@effect-ak/tg-bot-client"
import { loadConfig } from "./config"

async function main() {
  const config = loadConfig()

  const client = makeTgBotClient({
    bot_token: config.token
  })

  // Set webhook
  const result = await client.execute("set_webhook", {
    url: config.webhookUrl,
    drop_pending_updates: true,
    allowed_updates: [ 'callback_query', 'poll', 'message']
  })

  if (!result.ok) {
    console.error("Failed to set webhook:", result.error)
    process.exit(1)
  }
  console.log("Webhook set:", result.data)

  // Verify
  const info = await client.execute("get_webhook_info", {})

  if (!info.ok) {
    console.error("Failed to get webhook info:", info.error)
    process.exit(1)
  }
  console.log("Webhook info:", info.data)
}

main().catch(console.error)
