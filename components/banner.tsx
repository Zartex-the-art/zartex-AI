'use client'

import { XIcon } from 'lucide-react'
import { useState } from 'react'

interface Props {
  defaultOpen: boolean
  onDismiss: () => void
}

export function Banner({ defaultOpen, onDismiss }: Props) {
  const [open, setOpen] = useState(defaultOpen)
  if (!open) {
    return null
  }

  return (
    <div className="relative w-full text-xs border border-dashed border-violet-500/40 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-pink-500/10 py-2 pl-3 pr-8 font-mono">
      <span className="font-bold bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">ZARTEX AI</span>
      {' '}— An agentic coding platform. Enter a prompt, get a running full-stack app.
      Powered by Claude, GPT &amp; Grok · Hosted at{' '}
      <a href="https://ai.zartex.tech" className="underline underline-offset-2 text-fuchsia-500">ai.zartex.tech</a>
      <button
        aria-label="Close Banner"
        className="absolute top-2 right-2 text-fuchsia-500 hover:text-fuchsia-300 transition-colors cursor-pointer"
        onClick={() => {
          onDismiss()
          setOpen(false)
        }}
      >
        <XIcon className="w-4 h-4" />
      </button>
    </div>
  )
}
