/** @jsx jsx */
import { FC } from 'react'
import { jsx, css } from '@emotion/core'
import { colors, Flex } from '../theme'

import { PlayerControls } from './PlayerControls'
import { Track } from './Track'
import { useGroovyPlayer, TTrack } from './useGroovyPlayer'

export type Props = {
  metronome: boolean
  tracks: TTrack[]
}

export const GroovyPlayer: FC<Props> = ({
  tracks,
  metronome: initialMetronome = true,
  tempo: initialTempo = 110,
}) => {
  const {
    playLoop,
    stopLoop,
    tempo,
    setTempo,
    muted,
    setMuted,
    metronome,
    setMetronome,
    loopLength,
  } = useGroovyPlayer({ tracks, initialMetronome, initialTempo })
  return (
    <Wrapper>
      {tracks.map(({ title, instrument, pattern }, index) => (
        <Track
          {...{
            key: `${title}${instrument}${index}`,
            title,
            pattern: pattern?.repeat(loopLength / pattern.length),
            muted: muted[instrument],
            setMuted: (value) => setMuted({ ...muted, [instrument]: value }),
          }}
        />
      ))}

      <PlayerControls
        {...{
          playLoop,
          stopLoop,
          metronome,
          setMetronome,
          tempo,
          setTempo,
        }}
      />
    </Wrapper>
  )
}

const Wrapper = (props) => (
  <Flex.Col
    css={css`
      width: calc(100% + 24px);
      background: ${colors.black};
      color: ${colors.grayLight};
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      margin: 0 -12px 24px;

      @media (min-width: 768px) {
        border-radius: 4px;
        margin: 0 0 24px;
        width: 100%;
      }
    `}
    {...props}
  />
)
