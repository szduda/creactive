/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { colors } from '../theme'

const Wrapper = props => (
  <div css={css`
  background: ${colors.black};
  color: ${colors.white};
  padding: 12px 16px;
  box-shadow: 0 0 4px #000;
  opacity: 0.9
  `} {...props} />
)

const Title = () => (
  <h1 css={css`
    display: inline-flex;
    margin: 0;
    padding: 0;
    font-size: 24px;
    line-height: 1;
    font-variant: all-small-caps;
    letter-spacing: 2px;

    a {
      text-decoration: none !important;
    }

    a:hover {
      color: ${colors.grayLight}
    }

    > a:not(:last-of-type):after {
      content: '|';
      color: ${colors.grayLight};
      margin: 0 8px;
    }
  `}>
    <a href='#'>photos</a>
    <a href='#'>drums</a>
  </h1>
)

export const Header = ({ context }) => {
  return (
    <Wrapper>
      <Title />
    </Wrapper>
  )
}