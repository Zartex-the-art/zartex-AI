'use client'

import type { ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { InfoIcon } from 'lucide-react'
import { create } from 'zustand'
import { useEffect } from 'react'

interface State {
  open: boolean | undefined
  setOpen: (open: boolean) => void
}

export const useWelcomeStore = create<State>((set) => ({
  open: undefined,
  setOpen: (open) => set({ open }),
}))

export function Welcome(props: {
  onDismissAction(): void
  defaultOpen: boolean
}) {
  const { open, setOpen } = useWelcomeStore()

  useEffect(() => {
    setOpen(props.defaultOpen)
  }, [setOpen, props.defaultOpen])

  if (!(typeof open === 'undefined' ? props.defaultOpen : open)) {
    return null
  }

  const handleDismiss = () => {
    props.onDismissAction()
    setOpen(false)
  }

  return (
    <div className="fixed w-screen h-screen z-10">
      <div className="absolute w-full h-full bg-secondary opacity-60" />
      <div
        className="relative w-full h-full flex items-center justify-center"
        onClick={handleDismiss}
      >
        <div
          className="bg-background max-w-xl mx-4 rounded-lg shadow overflow-hidden"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="p-6 space-y-4">
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono font-extrabold tracking-widest text-2xl uppercase bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
                ZARTEX
              </span>
              <span className="text-xl font-semibold tracking-tight">AI Studio</span>
            </div>
            <p className="text-base text-primary">
              Welcome to <strong>ZARTEX AI</strong> — your agentic coding platform.
              Enter a text prompt and our AI agent will scaffold and run a
              complete full-stack application in seconds.
            </p>
            <p className="text-base text-secondary-foreground">
              Powered by frontier models (Claude, GPT, Grok) via AI Gateway,
              with secure sandboxed code execution and real-time streaming.
              Built with Next.js and the AI SDK — hosted at{' '}
              <ExternalLink href="https://ai.zartex.tech">ai.zartex.tech</ExternalLink>.
            </p>
          </div>
          <footer className="bg-secondary flex justify-end p-4 border-t border-border">
            <Button className="cursor-pointer" onClick={handleDismiss}>
              Start building
            </Button>
          </footer>
        </div>
      </div>
    </div>
  )
}

export function ToggleWelcome() {
  const { open, setOpen } = useWelcomeStore()
  return (
    <Button
      className="cursor-pointer"
      onClick={() => setOpen(!open)}
      variant="outline"
      size="sm"
    >
      <InfoIcon /> <span className="hidden lg:inline">About ZARTEX AI</span>
    </Button>
  )
}

function ExternalLink({
  children,
  href,
}: {
  children: ReactNode
  href: string
}) {
  return (
    <a
      className="underline underline-offset-3 text-primary"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  )
}
