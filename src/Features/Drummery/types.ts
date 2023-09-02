import { SwingStyle, TDrumSnippet } from '../../StateManager'

export type TDrummery = {
  useDrummeryContext(): {
    items: TDrumSnippet[]
    featuredItem: TDrumSnippet
    previewId: string
    setPreviewId(id: string | null): void
    setSearchTerm(term: string): void
    meta: {
      loading: boolean
    }
  }
}

export type TTrack = {
  title: string
  pattern: string
  instrument: string
}

export type TGroovyPlayerContext = {
  playLoop(): void
  stopLoop(): void
  playing: boolean
  metronome: boolean
  setMetronome(arg: boolean): void
  tempo: number
  setTempo(arg: number): void
  muted: Record<string, boolean>[]
  setMuted(arg: TGroovyPlayerContext['muted']): void
  loopLength: number
  swing: boolean
  setSwing(arg: boolean): void
  signalActive: boolean
  playSignal(): void
}

export type TGroovyPlayerHook = (props: {
  tracks: TTrack[]
  initialMetronome: boolean
  swingStyle: SwingStyle
  initialTempo: number
  signal?: string
}) => TGroovyPlayerContext
