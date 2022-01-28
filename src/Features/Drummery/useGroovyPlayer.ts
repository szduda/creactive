import { useState, useEffect } from 'react'

import {
  useMidiSounds,
  bell,
  sangban,
  sangbanClosed,
  shaker,
  dundunbaOpen,
  dundunbaClosed,
  kenkeniOpen,
  kenkeniClosed,
  kenkeniOpen2,
  kenkeniClosed2,
} from '../MidiSounds/MidiSounds'

export const useGroovyPlayer: TGroovyPlayerHook = ({
  tracks = [],
  initialMetronome = true,
  initialTempo = 110,
}) => {
  const midiSounds = useMidiSounds()
  const [tempo, setTempo] = useState(initialTempo)
  const [muted, setMuted] = useState({})
  const [metronome, setMetronome] = useState(initialMetronome)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (playing && tempo >= 40 && tempo <= 200) {
      playLoop()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tempo, muted, metronome])

  const loopLength = tracks.sort(byPatternLength)[0]?.pattern?.length ?? 0

  const beatSize = loopLength % 3 === 0 ? 3 : 4

  const parse = (instrument: string, sound: string = 'x') => {
    const pattern =
      tracks.find(t => t.instrument === instrument)?.pattern ?? null

    if (!pattern) return []

    const prolongedPattern = pattern.repeat(loopLength / pattern.length)
    const result: boolean[] = []
    for (let i = 0; i < prolongedPattern.length; i = i + 1) {
      result.push(prolongedPattern[i] === sound)
    }

    return result
  }

  const generateMetronome = () =>
    [...Array(loopLength)].map((_, index) => index % beatSize === 0)

  const loops = [
    !muted['bell'] && parse('bell'),
    !muted['sangban'] && parse('sangban', 'o'),
    !muted['sangban'] && parse('sangban', 'x'),
    metronome && generateMetronome(),
    !muted['dundunba'] && parse('dundunba', 'o'),
    !muted['dundunba'] && parse('dundunba', 'x'),
    !muted['kenkeni'] && parse('kenkeni', 'o'),
    !muted['kenkeni'] && parse('kenkeni', 'x'),
    !muted['kenkeni2'] && parse('kenkeni2', 'o'),
    !muted['kenkeni2'] && parse('kenkeni2', 'x'),
  ]

  const playLoop = () => {
    const beats = fillBeat(loops, loopLength)
    midiSounds.current?.setEchoLevel(0.05)
    midiSounds.current?.startPlayLoop(beats, (beatSize / 4) * tempo, 1 / 16)
    setPlaying(true)
  }

  const stopLoop = () => {
    midiSounds.current?.stopPlayLoop()
    setPlaying(false)
  }

  return {
    playLoop,
    stopLoop,
    metronome,
    setMetronome,
    tempo,
    setTempo,
    muted,
    setMuted,
    loopLength,
  }
}

const byPatternLength = (t1: TTrack, t2: TTrack) =>
  (t2.pattern?.length ?? 0) - (t1.pattern?.length ?? 0)

const drums = [
  bell,
  sangban,
  sangbanClosed,
  shaker,
  dundunbaOpen,
  dundunbaClosed,
  kenkeniOpen,
  kenkeniClosed,
  kenkeniOpen2,
  kenkeniClosed2,
]

const fillBeat = (tracks, length) => {
  const beats: number[][][] = []
  for (var i = 0; i < length; i++) {
    let notes: number[] = []
    // eslint-disable-next-line no-loop-func
    drums.forEach((drum, index) => {
      if (tracks[index] && tracks[index][i]) notes.push(drum)
    })
    beats.push([notes, []])
  }

  return beats
}

export type TTrack = {
  title: string
  pattern: string
  instrument: string
}

export type TGroovyPlayerContext = {
  playLoop(): void
  stopLoop(): void
  metronome: boolean
  setMetronome(arg: boolean): void
  tempo: number
  setTempo(arg: number): void
  muted: Record<string, boolean>[]
  setMuted(arg: Record<string, boolean>[]): void
  loopLength: number
}

export type TGroovyPlayerHook = (props: {
  tracks: TTrack[]
  initialMetronome: boolean
  initialTempo: number
}) => TGroovyPlayerContext
