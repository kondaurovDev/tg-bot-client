---
title: Installation
description: How to install Telegram Bot SDK packages
---

The SDK consists of three packages that can be used independently.

## HTTP Client only

If you just need a type-safe HTTP client for the Telegram Bot API:

```bash
npm install @effect-ak/tg-bot-client
```

## Bot Runner (with Effect)

For the full bot framework with long polling, handlers, and hot reload:

```bash
npm install @effect-ak/tg-bot effect
```

`effect` is a peer dependency and must be installed separately.

## API Types only

If you only need TypeScript type definitions:

```bash
npm install @effect-ak/tg-bot-api
```
