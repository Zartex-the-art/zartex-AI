import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { ChatProvider } from '@/lib/chat-context'
import { CommandLogsStream } from '@/components/commands-logs/commands-logs-stream'
import { ErrorMonitor } from '@/components/error-monitor/error-monitor'
import { SandboxState } from '@/components/modals/sandbox-state'
import { Toaster } from '@/components/ui/sonner'
import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Suspense } from 'react'
import './globals.css'

const title = 'ZARTEX AI — Vibe Coding Platform'
const description = `ZARTEX AI is an end-to-end agentic coding platform where you enter text prompts and the AI agent creates full-stack applications. Powered by the latest frontier models including Claude, GPT, and Grok, and hosted at ai.zartex.tech.`

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    siteName: 'ZARTEX AI',
    images: [
      {
        url: 'https://ai.zartex.tech/og.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@zartex',
    images: [
      {
        url: 'https://ai.zartex.tech/og.png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Suspense fallback={null}>
          <NuqsAdapter>
            <ChatProvider>
              <ErrorMonitor>{children}</ErrorMonitor>
            </ChatProvider>
          </NuqsAdapter>
        </Suspense>
        <Toaster />
        <CommandLogsStream />
        <SandboxState />
      </body>
    </html>
  )
}
