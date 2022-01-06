/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { colors } from '../theme'
import { Link } from 'react-router-dom'

const Wrapper = props => (
  <div css={css`
  background: ${colors.black};
  color: ${colors.white};
  padding: 2px 16px;
  box-shadow: 0 0 4px #000;
  opacity: 0.9;
  justify-content: center;
  display: flex;
  
  @media (max-width: 767px) {
    width: 100%;
  }
  `} {...props} />
)

const Separator = () => (
  <div css={css`
    content: '|';
    color: ${colors.grayLight};
    padding: 0 4px;
    pointer-events: none;
    cursor: normal;
`}>|</div>
)

const Title = () => (
  <h1 css={css`
    display: inline-flex;
    margin: 0;
    font-size: 24px;
    line-height: 1.5;
    font-variant: all-small-caps;
    letter-spacing: 2px;

    a {
      padding: 0 6px;
      text-decoration: none !important;
      color: ${colors.grayLight};
    }

    a:hover {
      color: ${colors.grayLighter};
    }
  `}>
    <Link to='/' css={css`color: ${colors.orangeDark} !important;`}>szd</Link>
    <Separator />
    <Link to='/photos'>photos</Link>
    <Separator />
    <Link to='/drums'>drums</Link>
    <Separator />
    <Link to='/dev'>dev</Link>
  </h1>
)

export const Header = () => {
  return (
    <Wrapper>
      <Title />
    </Wrapper>
  )
}