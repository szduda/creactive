/** @jsx jsx */
import { ComponentPropsWithoutRef, FC } from 'react'
import { jsx, css } from '@emotion/react'
import { ReactComponent as HamburgerIcon } from '../assets/icons/hamburger.svg'
import { ReactComponent as SearchIcon } from '../assets/icons/search.svg'
import { ReactComponent as AddIcon } from '../assets/icons/add.svg'
import { ReactComponent as CloseIcon } from '../assets/icons/close.svg'
import { ReactComponent as ExclamationIcon } from '../assets/icons/exclamation.svg'
import { ReactComponent as UnfoldIcon } from '../assets/icons/unfold.svg'
import { ReactComponent as DrumIcon } from '../assets/icons/drum.svg'
import { ReactComponent as ArrowIcon } from '../assets/icons/arrow.svg'
import { ReactComponent as PlayIcon } from '../assets/icons/play.svg'
import { ReactComponent as StopIcon } from '../assets/icons/stop.svg'
import { ReactComponent as RestartIcon } from '../assets/icons/restart.svg'
import { ReactComponent as ShakerIcon } from '../assets/icons/cabasa.svg'
import { ReactComponent as DjembeIcon } from '../assets/icons/djembe.svg'
import { ReactComponent as LogoIcon } from '../assets/icons/logo.svg'
import { ReactComponent as InfoIcon } from '../assets/icons/info.svg'
import { ReactComponent as SwingIcon } from '../assets/icons/swing.svg'
import { ReactComponent as PepperIcon } from '../assets/icons/pepper.svg'

export const colors = {
  red: '#ED3C19',

  orange: '#D95D39',
  orangeDark: '#AB3F21',
  orangeLight: '#DE7254',

  yellow: '#F9C926',
  yellowDark: '#DBA906',
  yellowLight: '#FBD760',

  green: '#2E8269',
  greenDarker: '#0F2723',
  greenDark: '#205A4A',
  greenLight: '#35977A',
  greenLighter: '#69A197',

  white: '#D0DCDB',
  black: '#121211',
  grayLighter: '#D0DCDB',
  grayLight: '#7DA19E',
  gray: '#455F5D',
  grayDark: '#2B3B3A',
  grayDarker: '#242A2A',
  grayDarkest: '#20221F',
  darken: color =>
    colors[`${Object.keys(colors).find(key => colors[key] === color)}Dark`] ||
    color,
  lighten: color =>
    colors[`${Object.keys(colors).find(key => colors[key] === color)}Light`] ||
    color,
}

export const Icons = {
  Hamburger: ({ color = colors.white, ...rest }) => (
    <HamburgerIcon
      css={css`
        fill: ${color};
      `}
      {...rest}
    />
  ),
  Search: ({ color = colors.white, ...rest }) => (
    <SearchIcon
      css={css`
        fill: ${color};
      `}
      {...rest}
    />
  ),
  Add: ({ color = colors.white, ...rest }) => (
    <AddIcon
      css={css`
        fill: ${color};
      `}
      {...rest}
    />
  ),
  Close: ({ color = colors.white }) => (
    <CloseIcon
      css={css`
        fill: ${color};
      `}
    />
  ),
  Exclamation: ({ color = colors.red, ...rest }) => (
    <ExclamationIcon
      css={css`
        fill: ${color};
      `}
      {...rest}
    />
  ),
  Unfold: ({ color = colors.white, ...rest }) => (
    <UnfoldIcon
      css={css`
        fill: ${color};
      `}
      {...rest}
    />
  ),
  Drum: () => <DrumIcon />,
  Play: () => <PlayIcon />,
  Stop: () => <StopIcon />,
  Restart: () => <RestartIcon />,
  Shaker: () => <ShakerIcon />,
  Djembe: () => <DjembeIcon />,
  Info: () => <InfoIcon />,
  Swing: () => <SwingIcon />,
  Pepper: () => <PepperIcon />,
  Logo: () => (
    <LogoIcon
      css={css`
        @media (max-width: 767px) {
          > g > g {
            display: none;
          }
        }
      `}
    />
  ),
  Arrow: ({
    color = colors.white,
    right = false,
    up = false,
    down = false,
    ...rest
  }) => (
    <ArrowIcon
      css={css`
        transform: rotate(
          ${Number(up) * 90 + Number(right) * 180 + Number(down) * 270}deg
        );
        fill: ${color};
      `}
      {...rest}
    />
  ),
}

export const themeProps = {
  headerHeight: '56px',
}

export const BottomContent = ({ visible, onClose, children, ...props }) => (
  <section
    css={css`
    position: fixed;
    bottom: ${visible ? 0 : '-100px'};
    opacity: ${visible ? 1 : 0};
    visibility ${visible ? 'visible' : 'hidden'};
    transition: bottom 200ms ease-out, opacity 100ms ease-out, visibility 200ms linear;
    left: 0;
    right: 0;
  `}
    {...props}
  >
    <Button
      onClick={onClose}
      css={css`
        border-bottom: 2px solid #000;
        position: absolute;
        right: 0;
        left: 0;
        transition: backdrop-filter 200ms ease-out 150ms;
        backdrop-filter: brightness(${visible ? 0.5 : 0})
          grayscale(${visible ? 0.4 : 0}) blur(${visible ? 4 : 0}px)
          opacity(${visible ? 1 : 0});
        bottom: 100%;
        height: 100vh;
        width: 100%;
      `}
    />
    {children}
  </section>
)

const Row = ({
  align = '',
  valign = '',
  wide = false,
  wrap = false,
  grow = '',
  ...props
}) => (
  <div
    css={css`
      display: flex;
      justify-content: ${align || 'space-between'};
      align-items: ${valign || 'flex-start'};
      ${grow && `flex-grow: ${grow};`}
      width: ${wide ? '100%' : 'auto'};
      ${wrap && 'flex-wrap: wrap;'}
    `}
    {...props}
  />
)

type TCol = {
  align?: string
  valign?: string
}

const Col: FC<TCol> = ({ align, valign, ...props }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      justify-content: ${valign || 'flex-start'};
      align-items: ${align || 'flex-start'};
    `}
    {...props}
  />
)

export const Flex = {
  Row,
  Col,
}

export const Theme = props => (
  <div
    css={css`
      font-family: 'Consolas';
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: ${colors.black};
      width: 100%;
      padding: 0;
      margin: 0 auto;
      position: relative;

      p,
      button,
      a,
      label,
      span,
      div,
      h1,
      h2,
      h3,
      h4,
      h5 {
        font-family: 'Consolas';
      }

      main {
        padding: 36px 0 48px;

        @media (min-width: 768px) {
          padding: 36px 0 0;
        }
      }

      header {
        position: fixed;
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        z-index: 999;
        background: ${colors.greenDarker};
        box-shadow: 0 0 4px ${colors.gray}44;

        @media (min-width: 768px) {
          background: none;
          box-shadow: none;
        }
      }

      div {
        box-sizing: border-box;
      }

      label {
        display: inline-flex;
        flex-direction: column;
        color: ${colors.grayLight};

        span:first-of-type {
          min-height: 19px;
        }
      }

      textarea,
      input {
        background: ${colors.grayDark};
        color: ${colors.grayLighter};
        border-radius: 4px;
        border: 2px solid ${colors.grayLight}22;
        padding: 7px 8px 5px;
        min-width: 24px;
        font: 700 24px Consolas;
        line-height: 36px;

        &::placeholder {
          color: ${colors.gray};
          font-weight: 400;
        }

        &:hover {
          background: ${colors.gray}88;
        }

        &:focus {
          border-color: ${colors.yellowDark};
          outline: none;
        }
      }

      input {
        height: 24px;
      }

      input:disabled {
        color: ${colors.grayLight};
      }

      .InputDisabled {
        background: ${colors.gray};
        opacity: 0.8;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
      }

      input[type='checkbox'] {
        width: 24px;
        height: 24px;
      }

      p {
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.6px;
        font-weight: 300;
        margin: 0 0 12px;
        color: ${colors.grayLighter};
      }

      a {
        cursor: pointer;
      }
    `}
    {...props}
  />
)

export const Checkbox: FC<{
  checked: boolean
  onClick(): void
  ariaLabel: string
  className?: string
  disabled: boolean
}> = ({ checked, onClick, children, ariaLabel, className, disabled }) => (
  <Button
    ninja
    aria-label={ariaLabel}
    role="checkbox"
    onClick={onClick}
    css={css`
      align-items: center;
    `}
    disabled={disabled}
  >
    <div
      css={css`
        border-radius: 50%;
        border: 2px solid ${colors.yellow};
        width: 24px;
        height: 24px;
        margin-right: 16px;
        position: relative;

        transition: transform 100ms ease-out;
        :active {
          transform: scale(0.95);
        }

        ${checked &&
        `
          :after {
            background: ${colors.yellow};
            position: absolute;
            margin: 3px;
            top: 0;
            left: 0;
            content: '';
            border-radius: 50%;
            height: 14px;
            width: 14px;
          }
        `}
        @media (min-width: 768px) {
          :hover {
            border-color: ${colors.grayLight};
          }
        }

        ${disabled &&
        `
        cursor: arrow;
        border-color: ${colors.grayLight} !important;
        :after{
           background: ${colors.grayLight} !important;
        }
        `}
      `}
      className={className}
    />
    {children}
  </Button>
)

type ButtonProps = {
  filled?: boolean
  ninja?: boolean
} & ComponentPropsWithoutRef<'button'>

export const Button: FC<ButtonProps> = ({ filled, ninja, ...rest }) =>
  ninja ? (
    <button
      css={css`
        background: none;
        border: none;
        display: flex;
        margin: 0;
        padding: 0;
        ${!rest.disabled && 'cursor: pointer;'}
        color: ${colors.white};
      `}
      {...rest}
    />
  ) : (
    <button
      onMouseUp={e => e.preventDefault()}
      css={css`
        border-radius: 4px;
        border: ${filled
          ? `2px solid ${colors.yellowLight}`
          : `2px solid ${colors.grayLight}`};
        font: 500 22px Consolas;
        line-height: 24px;
        background: ${filled ? colors.yellowLight : 'none'};
        font-weight: 700;
        outline: none;
        display: flex;
        justify-content: center;
        padding: 11px 16px 7px;
        ${!rest.disabled && 'cursor: pointer;'}
        transition: transform 150ms ease-out;

        :hover {
          background: ${filled ? colors.gray + '88' : colors.black + '44'};
          color: ${colors.white};
          border-color: ${colors.grayLight}44;
        }

        :active {
          color: ${colors.white};
          background: ${filled ? colors.gray + '66' : colors.black + '5A'};
          transform: scale(0.97);
        }

        :focus:not(:hover):not(:active) {
          outline: none;
          color: ${colors.white};
          background: ${colors.greenDarker + '88'};
        }

        ${rest.disabled &&
        `
          background: ${filled ? colors.gray : 'none'};
          border-color: ${colors.gray};
        `}
      `}
      {...rest}
    />
  )

export const H2 = props => (
  <h2
    css={css`
      color: ${colors.grayLight};
      letter-spacing: 1px;
      font-size: 28px;
      line-height: 36px;
      margin: 0;
    `}
    {...props}
  />
)

export const H3 = props => (
  <h3
    css={css`
      color: ${colors.gray};
      text-transform: uppercase;
      letter-spacing: 1.5px;
      font-size: 18px;
      line-height: 24px;
      margin: 0 0 8px;
    `}
    {...props}
  />
)

export const AnchorLink = props => (
  // eslint-disable-next-line
  <div
    css={css`
      cursor: pointer;
      display: inline-block;
      color: ${colors.white};
      transition: transform 100ms ease-out;
      text-decoration: none;
      padding: 0 0 2px;
      border-bottom: 2px solid ${colors.red};

      *:active,
      :active {
        transform: scaleX(0.97);
      }
    `}
    {...props}
  />
)

export const FAB = ({ top, ...rest }) => (
  <Button
    css={css`
      cursor: pointer;
      z-index: 1000;
      border-radius: 50%;
      position: absolute;
      ${top ? 'top' : 'bottom'}: 12px;
      right: 20px;
      display: flex;
      padding: 8px;
      margin: 0;
      background: ${colors.black};
      border: 1px solid ${colors.gray};
      box-shadow: 0 0 4px 0 ${colors.grayDark};
      transition: transform 100ms ease-out, background 100ms ease-out;

      > svg {
        width: 32px;
        height: 32px;
      }

      :hover {
        background: ${colors.greenDark};
      }

      > {
        transition: transform 100ms ease-out;
      }

      :active,
      > :active {
        transform: scale(0.97);
      }
    `}
    {...rest}
  />
)
