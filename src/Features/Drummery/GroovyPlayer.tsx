/** @jsx jsx */
import { FC, useState, useEffect } from 'react'
import { jsx, css } from '@emotion/core'
import { colors, Flex, Button, Icons } from '../theme'

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
  const beats = Array()
  for (var i = 0; i < length; i++) {
    let notes: number[] = []
    drums.forEach((drum, index) => {
      if (tracks[index] && tracks[index][i]) notes.push(drum)
    })
    beats.push([notes, []])
  }

  return beats
}

export type Props = {
  metronome: boolean
  tracks: Array<{
    title: string
    loop: string
    instrument: string
  }>
}

export const GroovyPlayer: FC<Props> = ({
  tracks,
  metronome: initialMetronome = true,
}) => {
  const midiSounds = useMidiSounds()
  const [tempo, setTempo] = useState(110)
  const [muted, setMuted] = useState({})
  const [metronome, setMetronome] = useState(initialMetronome)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (playing) {
      playLoop()
    }
  }, [tempo, muted, metronome])

  const length = tracks[0].loop.length

  const parse = (instrument: string, sound: string = 'x') => {
    const loop = tracks.find((track) => track.instrument === instrument)?.loop
    const result: boolean[] = []
    for (let i = 0; i < loop?.length ?? 0; i = i + 1) {
      result.push(loop[i] === sound)
    }

    return result
  }

  const loops = [
    !muted['bell'] && parse('bell'),
    !muted['sangban'] && parse('sangban', 'o'),
    !muted['sangban'] && parse('sangban', 'x'),
    metronome && [...Array(length)].map((_, index) => index % 4 === 0),
    !muted['dundunba'] && parse('dundunba', 'o'),
    !muted['dundunba'] && parse('dundunba', 'x'),
    !muted['kenkeni'] && parse('kenkeni', 'o'),
    !muted['kenkeni'] && parse('kenkeni', 'x'),
    !muted['kenkeni2'] && parse('kenkeni2', 'o'),
    !muted['kenkeni2'] && parse('kenkeni2', 'x'),
  ]

  const playLoop = () => {
    const beats = fillBeat(loops, length)
    midiSounds.current?.setEchoLevel(0.3)
    midiSounds.current?.startPlayLoop(beats, tempo, 1 / 16)
    setPlaying(true)
  }

  const stopLoop = () => {
    midiSounds.current?.stopPlayLoop()
    setPlaying(false)
  }

  return (
    <div
      css={css`
        width: 100%;
        background: ${colors.black};
        border-radius: 4px;
        color: ${colors.grayLight};
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
      `}
    >
      {tracks.map(({ title, instrument, loop }) => (
        <Track
          {...{
            key: title + instrument,
            title,
            loop,
            muted: muted[instrument],
            setMuted: (value) => setMuted({ ...muted, [instrument]: value }),
          }}
        />
      ))}

      <Flex.Row
        align="flex-start"
        css={css`
          margin: 24px 32px;
          > * {
            margin-right: 8px;
          }
        `}
      >
        <Button filled onClick={playLoop}>
          Play
        </Button>
        <Button filled onClick={stopLoop}>
          Stop
        </Button>

        <input
          type="text"
          size="2"
          value={tempo}
          onChange={(e) => setTempo(e.target.value)}
          css={css`
            margin-left: 24px;
          `}
        />
        <span
          css={css`
            align-self: flex-end;
            font-size: 24px;
            line-height: 44px;
          `}
        >
          BPM
        </span>

        <input
          type="checkbox"
          id="metronome_checkbox"
          checked={metronome}
          onChange={(e) => setMetronome(e.target.checked)}
          css={css`
            margin-left: 24px !important;
          `}
        />
        <label
          htmlFor="metronome_checkbox"
          css={css`
            align-self: flex-end;
            font-size: 24px;
            line-height: 44px;
          `}
        >
          metronome
        </label>
      </Flex.Row>
    </div>
  )
}

const Track: FC = ({ title, loop, muted, setMuted }) => (
  <div
    css={css`
      padding: 8px 16px 24px;
      border-bottom: 2px solid ${colors.grayLight}44;
      margin: 6px 0;
      @media (min-width: 768px) {
        padding: 8px 32px 24px;
      }
    `}
  >
    <Flex.Row
      align="flex-start"
      valign="center"
      css={css`
        margin-bottom: 8px;
      `}
    >
      <div>
        <input
          type="checkbox"
          checked={!muted}
          onChange={(e) => setMuted(!e.target.checked)}
        />
      </div>
      <div
        css={css`
          color: ${colors.gray};
        `}
      >
        {title}
      </div>
    </Flex.Row>
    <div
      css={css`
        font-size: 24px;
        line-height: 36px;
        max-width: 212px;

        @media (min-width: 768px) {
          font-size: 22px;
          max-width: 424px;
          line-height: 48px;
        }

        @media (min-width: 1440px) {
          font-size: 40px;
          line-height: 48px;
          max-width: 848px;
        }
      `}
    >
      |{loop?.match(/.{1,8}/g)?.join('|')}|
    </div>
  </div>
)
