# ZARTEX AI Studio

An agentic coding platform where you enter text prompts and the AI agent generates full-stack applications in a sandboxed environment with live preview, file explorer, and command logs.

**Hosted at: [ai.zartex.tech](https://ai.zartex.tech)**

## Features

- Multi-model support via AI Gateway (Claude, GPT, Grok)
- Secure sandboxed code execution with live preview
- Real-time streaming output
- File explorer for browsing generated project files
- Command logs and error monitoring
- Built and branded for ZARTEX

## Tech Stack

- [Next.js](https://nextjs.org) with Turbopack
- [AI SDK](https://ai-sdk.dev) v6
- [Vercel AI Gateway](https://vercel.com/docs/ai-gateway)
- [Vercel Sandbox](https://vercel.com/docs/vercel-sandbox)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)

## Getting Started

### Run Locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Supported Models

- Claude Opus 4.6
- Claude Sonnet 4.6
- GPT-5.3 Codex
- Grok 4.1 Reasoning

## Deploy

Deploy to Vercel and point your `ai.zartex.tech` domain to the deployment:

```bash
vc deploy
```

Then add the custom domain `ai.zartex.tech` in the Vercel project settings.
