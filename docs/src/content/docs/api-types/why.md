---
title: Why this package?
description: Why use auto-generated TypeScript types for the Telegram Bot API
---

Telegram does not provide an official TypeScript SDK. The only source of truth is an HTML page at `core.telegram.org/bots/api`. Everyone who builds a Telegram library in TypeScript ends up writing their own parser or maintaining types by hand.

This package solves the problem once: a [code generator](/api-types/how-it-works/) scrapes the official HTML, extracts every type and method, and produces clean TypeScript interfaces. The result is published to npm so you can add it as a dependency instead of writing your own parser.

- **287 types** and **165 methods** — the full Bot API surface
- **Always in sync** — regenerated from official docs on every release
- **Just types** — no runtime code, no dependencies, use with any HTTP client or framework

If you're building your own Telegram bot library, you don't need to parse HTML or maintain types manually. Install this package and work with TypeScript from there.
