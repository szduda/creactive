/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { colors, Button, Flex, Icons } from '../theme'

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

const Search = ({ term, onChange, reset }) => (
  <Flex.Row valign="center">
    <input
      type="text"
      maxLength={20}
      placeholder="tag or rhythm..."
      value={term}
      onClick={e => e.preventDefault()}
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

        &:hover {
          background: ${colors.grayDark}cc !important;
        }

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
      <Search term={searchTerm} onChange={search} reset={reset} />
      <Icons.Logo />
      <div
        css={css`
          width: 198px;
          @media (max-width: 767px) {
            display: none;
          }
        `}
      />
    </Wrapper>
  )
}
