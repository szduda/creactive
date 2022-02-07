/** @jsx jsx */
import { FC } from 'react'
import { jsx, css } from '@emotion/react'
import { Flex, Button, Icons, colors } from '../theme'

export const PlayerControls: FC = ({
  playLoop,
  stopLoop,
  playing,
  metronome,
  setMetronome,
  tempo,
  setTempo,
  disabled,
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
        border-radius: 50%;

        :hover {
          background: ${colors.grayLight}44;
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
