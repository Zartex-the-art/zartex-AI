import { ToggleWelcome } from '@/components/modals/welcome'
import { cn } from '@/lib/utils'

interface Props {
  className?: string
}

export async function Header({ className }: Props) {
  return (
    <header className={cn('flex items-center justify-between', className)}>
      <div className="flex items-center gap-2">
        {/* ZARTEX wordmark */}
        <span className="font-mono font-extrabold tracking-widest text-base uppercase bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent select-none">
          ZARTEX
        </span>
        <span className="hidden md:inline text-xs font-mono font-semibold uppercase tracking-tight text-muted-foreground">
          AI Studio
        </span>
        <span className="hidden md:inline text-xs font-mono text-muted-foreground/50">·</span>
        <span className="hidden md:inline text-xs font-mono text-muted-foreground/50">ai.zartex.tech</span>
      </div>
      <div className="flex items-center ml-auto space-x-1.5">
        <ToggleWelcome />
      </div>
    </header>
  )
}
