/** @jsx jsx */
import { FC } from 'react'
import { jsx, css } from '@emotion/react'
import { Flex, Button, Icons, colors } from '../theme'
import { SwingStyle } from '../../StateManager'

export type Props = {
  playLoop(): void
  stopLoop(): void
  playing: boolean
  metronome: boolean
  setMetronome(arg: boolean): void
  tempo: number,
  setTempo(arg: number): void,
  disabled: boolean,
  swing: boolean,
  setSwing(arg: boolean): void,
  swingStyle: SwingStyle,
}

export const PlayerControls: FC<Props> = ({
  playLoop,
  stopLoop,
  playing,
  metronome,
  setMetronome,
  tempo,
  setTempo,
  disabled,
  swing,
  setSwing,
  swingStyle,
}) => (
  <Wrapper>
    <Flex.Row
      css={css`
        flex: 1;
      `}
      align="flex-start"
    >
      <Button
        ninja
        aria-label={playing ? 'Restart' : 'Play'}
        onClick={playLoop}
        disabled={disabled}
        css={css`
          padding: 4px;
          :hover svg path {
            fill: ${colors.grayLight};
          }
          transition: transform 100ms ease-out;
          :active {
            transform: scale(0.95);
          }
        `}
      >
        {playing ? <Icons.Restart /> : <Icons.Play />}
      </Button>
      <Button
        ninja
        aria-label="Stop"
        onClick={stopLoop}
        css={css`
          margin: 0 24px 0 8px;
          padding: 4px;
          :hover svg rect {
            fill: ${colors.grayLight};
          }
          transition: transform 100ms ease-out;
          :active {
            transform: scale(0.95);
          }
        `}
        disabled={disabled}
      >
        <Icons.Stop />
      </Button>
    </Flex.Row>

    <Flex.Row>
      <input
        type="text"
        maxLength={3}
        value={tempo}
        disabled={disabled}
        css={css`
          width: 44px;
        `}
        onChange={e => {
          const value = Number(e.target.value)
          if (isNaN(value)) return

          setTempo(value)
        }}
      />
      <span
        css={css`
          align-self: flex-end;
          font-size: 24px;
          line-height: 44px;
          margin-left: 8px;
          margin-right: 8px;
          @media (min-width: 768px) {
            margin-right: 24px;
          }
        `}
      >
        BPM
      </span>
    </Flex.Row>

    <Button
      ninja
      disabled={disabled}
      aria-label={`turn metronome ${metronome ? 'off' : 'on'}`}
      onClick={() => setMetronome(!metronome)}
      css={css`
        padding: 4px;
        margin-bottom: 24px;
        border-radius: 50%;

        :hover {
          background: ${colors.grayLight}44;
        }

        transition: transform 100ms ease-out;
        :active {
          transform: scale(0.95);
        }

        ${(!metronome || disabled) &&
        `
        svg g {
          path:first-of-type, 
          path:nth-of-type(2) {
            fill: ${colors.grayLight};
        }`}
      `}
    >
      <Icons.Shaker />
    </Button>

    <Button
      ninja
      disabled={disabled || !swingStyle}
      aria-label={`turn swing ${swing ? 'off' : 'on'}`}
      onClick={() => setSwing(!swing)}
      css={css`
        padding: 4px;
        border-radius: 50%;
        margin-bottom: 24px;

        :hover {
          background: ${colors.grayLight}44;
        }

        transition: transform 100ms ease-out;
        :active {
          transform: scale(0.95);
        }

        ${(!swing || disabled) &&
        `
        svg path {
          fill: ${colors.grayLight};
          &:first-of-type {
            stroke: ${colors.grayLight};
          }
        }`}
      `}
    >
      <Icons.Pepper />
    </Button>
  </Wrapper>
)

const Wrapper = props => (
  <Flex.Row
    align="space-between"
    wrap
    css={css`
      width: 100%;
      padding: 24px 16px 0;

      @media (min-width: 768px) {
        padding: 24px 24px 0;
      }

      > * {
        padding-bottom: 24px;
      }
    `}
    {...props}
  />
)
