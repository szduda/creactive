/** @jsx jsx */
import { FC } from 'react'
import { jsx, css } from '@emotion/core'
import { colors } from '../theme'

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
  } = useGroovyPlayer({ tracks, initialMetronome, initialTempo })
  return (
    <Wrapper>
      {tracks.map(({ title, instrument, pattern }, index) => (
        <Track
          {...{
            key: `${title}${instrument}${index}`,
            title,
            pattern,
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
  <div
    css={css`
      width: 100%;
      background: ${colors.black};
      border-radius: 4px;
      color: ${colors.grayLight};
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 24px;
    `}
    {...props}
  />
)
