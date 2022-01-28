/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { colors, Button, Flex, Icons } from '../theme'
import { Link } from 'react-router-dom'

const Wrapper = props => (
  <Flex.Row
    valign="center"
    css={css`
      background: ${colors.black};
      color: ${colors.white};
      padding: 2px 16px;
      box-shadow: 0 0 4px #000;
      width: 100%;
    `}
    {...props}
  >
    <Flex.Row
      wide
      valign="center"
      css={css`
        margin: 0 auto;
        max-width: 1360px;
      `}
      {...props}
    />
  </Flex.Row>
)

const Separator = () => (
  <div
    css={css`
      content: '|';
      color: ${colors.grayLight};
      padding: 0 4px;
      pointer-events: none;
      cursor: normal;
    `}
  >
    |
  </div>
)

const Nav = () => (
  <nav
    css={css`
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
    `}
  >
    <h1
      css={css`
        color: ${colors.orangeDark};
        margin: 0;
        font-size: inherit;
        padding: 0 6px;
      `}
    >
      szd
    </h1>
    {/* <Separator />
    <Link to='/photos'>photos</Link> */}
    <Separator />
    <Link to="/drums">drums</Link>
    {/* <Separator />
    <Link to='/dev'>dev</Link> */}
  </nav>
)

const Search = ({ term, onChange, reset }) => (
  <Flex.Row valign="center">
    <input
      type="text"
      maxLength={20}
      placeholder="tag or rhythm..."
      value={term}
      onChange={e => onChange(e.target.value)}
      css={css`
        margin: 4px 0;
        border: none !important;
        background: ${colors.grayDark}88 !important;
        height: 16px !important;
        font-size: 16px !important;
        line-height: 24px !important;
        padding: 4px 8px;
        width: 116px;

        @media (min-width: 768px) {
          width: 184px;
        }
      `}
    />
    <Button
      ninja
      onClick={term ? reset : null}
      css={css`
        text-decoratio: underline;
        margin: 4px;
        padding: 4px;
        border-radius: 50%;

        :hover {
          background: ${colors.grayDark}88;
        }

        :active {
          background: ${colors.grayDark}cc;
        }
      `}
    >
      {term ? (
        <Icons.Close color={colors.grayLight} />
      ) : (
        <Icons.Search color={colors.grayLight} />
      )}
    </Button>
  </Flex.Row>
)

export const Header = ({ useHeaderContext }) => {
  const { searchTerm, search, reset } = useHeaderContext()
  return (
    <Wrapper>
      <div
        css={css`
          width: 133px;
          @media (max-width: 767px) {
            display: none;
          }
        `}
      />
      <Search term={searchTerm} onChange={search} reset={reset} />
      <Nav />
    </Wrapper>
  )
}
