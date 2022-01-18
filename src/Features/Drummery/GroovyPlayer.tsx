/** @jsx jsx */
import { FC } from 'react'
import { jsx, css } from '@emotion/core'
import { colors, Flex, Button, Icons } from '../theme'

import {
  useMidiSounds,
  bell,
  sangban,
  sangbanClosed,
  shaker,
} from '../MidiSounds/MidiSounds'

const fillBeat = (tracks, length) => {
  const beats = Array()
  for (var i = 0; i < length; i++) {
    let drums: number[] = []
    if (tracks[0][i]) drums.push(bell)
    if (tracks[1][i]) drums.push(sangban)
    if (tracks[2][i]) drums.push(sangbanClosed)
    if (tracks[3] && tracks[3][i]) drums.push(shaker)

    beats.push([drums, []])
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

export const GroovyPlayer: FC<Props> = ({ tracks, metronome = true }) => {
  const midiSounds = useMidiSounds()

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
    parse('bell'),
    parse('sangban', 'o'),
    parse('sangban', 'x'),
    metronome && [...Array(length)].map((_, index) => index % 4 === 0),
  ]

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
        <Track {...{ key: title + instrument, title, loop }} />
      ))}

      <Flex.Row
        align="flex-start"
        css={css`
          margin: 24px 32px;
        `}
      >
        <Button
          filled
          onClick={() => {
            const beats = fillBeat(loops, length)
            midiSounds.current?.startPlayLoop(beats, 110, 1 / 16)
          }}
          css={css`
            margin-right: 4px;
          `}
        >
          Play
        </Button>
        <Button
          filled
          onClick={() => {
            midiSounds.current?.stopPlayLoop()
          }}
        >
          Stop
        </Button>
      </Flex.Row>
    </div>
  )
}

const Track: FC = ({ title, loop }) => (
  <div
    css={css`
      padding: 24px 16px;
      border-bottom: 2px solid ${colors.grayLight}44;
      margin: 6px 0;
      @media (min-width: 768px) {
        padding: 24px 32px;
      }
    `}
  >
    <div
      css={css`
        color: ${colors.gray};
      `}
    >
      {title}
    </div>
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
