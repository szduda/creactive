/** @jsx jsx */
import { FC } from 'react'
import { jsx, css } from '@emotion/react'
import { colors, Flex } from '../theme'

import { PlayerControls } from './PlayerControls'
import { Track } from './Track'
import { useGroovyPlayer, TTrack } from './useGroovyPlayer'
import { SwingStyle } from '../../StateManager'

export type Props = {
  metronome: boolean
  swing: SwingStyle
  tempo: number
  tracks: TTrack[]
}

export const GroovyPlayer: FC<Props> = ({
  tracks,
  swingStyle,
  metronome: initialMetronome = true,
  tempo: initialTempo = 110,
}) => {
  const {
    playLoop,
    stopLoop,
    playing,
    tempo,
    setTempo,
    muted,
    setMuted,
    metronome,
    setMetronome,
    loopLength,
    swing,
    setSwing,
  } = useGroovyPlayer({
    tracks,
    initialMetronome,
    initialTempo,
    swingStyle,
  })

  return (
    <Wrapper>
      {tracks.length
        ? tracks.map(({ title, instrument, pattern }, index) => (
            <Track
              {...{
                key: `${title}${instrument}${index}`,
                title,
                pattern: pattern?.repeat(loopLength / pattern.length),
                muted: muted[instrument],
                setMuted: value => setMuted({ ...muted, [instrument]: value }),
              }}
            />
          ))
        : [...Array(3)].map((_, i) => <Track key={`track-${i}`} />)}

      <PlayerControls
        {...{
          playLoop,
          stopLoop,
          playing,
          metronome,
          setMetronome,
          tempo,
          setTempo,
          disabled: !tracks.length,
          swing,
          setSwing,
          swingStyle,
        }}
      />
    </Wrapper>
  )
}

const Wrapper = props => (
  <Flex.Col
    css={css`
      width: 100vw;
      background: ${colors.black}da;
      box-shadow: 0 0 4px #00000044;
      color: ${colors.grayLight};
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      margin: 0 -12px 24px;

      @media (min-width: 768px) {
        border-radius: 4px;
        margin: 0 0 24px;
        width: 100%;
        min-width: 386px;
      }

      @media (min-width: 1024px) {
        min-width: 480px;
      }
    `}
    {...props}
  />
)
