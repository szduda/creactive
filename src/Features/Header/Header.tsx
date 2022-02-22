/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { Link } from 'react-router-dom'
import { colors, Button, Flex, Icons } from '../theme'

const Wrapper = props => (
  <Flex.Row
    valign="center"
    css={css`
      background: ${colors.greenDarker}44;
      color: ${colors.white};
      padding: 12px 16px;
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
  <Flex.Row
    valign="center"
    css={css`
      order: 2;
      @media (min-width: 768px) {
        order: 1;
      }
    `}
  >
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
        background: ${colors.grayDark}44 !important;
        height: 16px !important;
        font-size: 16px !important;
        line-height: 24px !important;
        padding: 4px 8px;
        width: 140px;

        &:hover,
        &:focus {
          background: ${colors.grayDark}aa !important;
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
      <Link
        to="/"
        css={css`
          display: flex;
          transform: translateY(-3px);
          flex: 0 0 auto;

          @media (min-width: 768px) {
            order: 2;
          }

          :hover svg {
            path {
              fill: ${colors.yellow}aa;
            }
            rect {
              stroke: ${colors.black}99;
              fill: ${colors.yellow}aa;
            }
            circle {
              stroke: ${colors.yellow}aa;
              fill: ${colors.yellow}44;
            }
          }

          transition: transform 100ms ease-out;
          :active {
            transform: scale(0.97);
          }
        `}
      >
        <Icons.Logo />
      </Link>
      <div
        css={css`
          width: 240px;
          display: flex;
          justify-content: flex-end;
          order: 3;
          @media (max-width: 767px) {
            width: auto;
          }
        `}
      >
        {/* <Link to="/about"> */}
        <Button
          ninja
          disabled
          css={css`
            padding: 4px;
            transform: translateX(4px);
            // :hover svg circle {
            //   fill: ${colors.yellow};
            // }

            // :active svg circle {
            //   fill: ${colors.yellow}dd;
            // }
          `}
        >
          <Icons.Info />
        </Button>
        {/* </Link> */}
      </div>
    </Wrapper>
  )
}
