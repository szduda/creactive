/** @jsx jsx */
import { FC, Fragment, useRef, useState } from 'react'
import { jsx, css } from '@emotion/core'
import { colors, Flex, Button, Icons } from '../theme'

import {
  useMidiSounds,
  bell,
  sangban,
  sangbanClosed,
} from '../MidiSounds/MidiSounds'

export type Props = {
  tracks: {
    title: string
    loop: string
    instrument: string
  }[]
}

const fillBeat = (tracks) => {
  const beats = Array(16)
  for (var i = 0; i < 16; i++) {
    let drums = Array()
    if (tracks[0][i]) drums.push(bell)
    if (tracks[1][i]) drums.push(sangban)
    if (tracks[2][i]) drums.push(sangbanClosed)

    beats[i] = [drums, []]
  }

  return beats
}

export const GroovyPlayer: FC<Props> = ({ tracks }) => {
  const midiSounds = useMidiSounds()

  const parse = (instrument: string, sound: string = 'x') => {
    const loop = tracks.find((track) => track.instrument === instrument)?.loop
    const result: boolean[] = []

    for (let i = 0; i < loop?.length ?? 0; i = i + 1) {
      result.push(loop[i] === sound)
    }

    return result
  }

  const loops = [parse('bell'), parse('sangban', 'o'), parse('sangban', 'x')]

  return (
    <div
      css={css`
        width: 100%;
        margin: 48px 0;
        background: ${colors.black};
        border-radius: 4px;
        color: ${colors.grayLight};
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
      `}
    >
      {tracks.map(({ title, loop, instrument }) => (
        <div
          key={instrument + title}
          css={css`
            padding: 24px 32px;
            border-bottom: 2px solid ${colors.grayLight}44;
            margin: 6px 0;
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
              font-size: 40px;
              line-height: 48px;
            `}
          >
            |{loop.match(/.{1,8}/g).join('|')}|
          </div>
        </div>
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
            const beats = fillBeat(loops)
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
