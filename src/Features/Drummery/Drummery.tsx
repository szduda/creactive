/** @jsx jsx */
/** @jsxFrag */
import React, { FC } from 'react'
import { jsx, css } from '@emotion/react'
import { H3 } from '../theme'
import { ListItem, SnippetDetails, TDrummery } from './'

const Wrapper = props => (
  <div
    css={css`
      display: flex;
      align-items: flex-start;
      padding: 0 8px;
      width: 100%;
      max-width: 1392px;
      margin: 0 auto;

      @media (min-width: 768px) {
        padding: 0 8px;
      }
    `}
    {...props}
  />
)

const ListWrapper = ({ mobileHidden = false, ...props }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      padding: 0 8px 48px;
      flex: 0 0 100%;

      @media (max-width: 767px) {
        ${
          mobileHidden
            ? `
        visibility: hidden;
        height: calc(100vh - 160px);
        overflow: hidden;
        `
            : ''
        }
      }

      @media (min-width: 768px) {
        height: calc(100vh - 100px);
        overflow-y: auto;
        padding-right: 16px;
        flex: 0 0 40%;
      }

      @media (min-width: 1024px) {
        padding-right: 24px;
      }

      
      @media (min-width: 1440px) {
        padding-right 64px;
        flex: 0 0 30%;
      }
    `}
    {...props}
  />
)

export const Drummery: FC<TDrummery> = ({ useDrummeryContext }) => {
  const {
    items,
    featuredItem,
    slug,
    navigateToSnippet,
    setSearchTerm,
    meta: { loading },
  } = useDrummeryContext()
  const placeholders = [...Array(9)].map((_, index) => ({ id: `p-${index}` }))
  const previewItem = items.find(snippet => snippet.slug === slug)
  return (
    <Wrapper>
      <ListWrapper mobileHidden={Boolean(slug)}>
        {featuredItem && (
          <>
            <H3
              css={css`
                margin-top: 0;
              `}
            >
              Recently added
            </H3>
            <ListItem
              featured
              {...{
                key: featuredItem.id,
                item: featuredItem,
                dimmed: Boolean(slug),
                onClick: () =>
                  navigateToSnippet(
                    featuredItem.slug === slug ? null : featuredItem.slug
                  ),
              }}
            />
          </>
        )}
        <H3>All rhythms</H3>
        {(items.length ? items : placeholders).map(snippet => (
          <ListItem
            {...{
              key: snippet.id,
              item: snippet,
              loading,
              onClick: () =>
                navigateToSnippet(snippet.slug === slug ? null : snippet.slug),
              selected: snippet.slug === slug,
              dimmed: slug && slug !== snippet.slug,
            }}
          />
        ))}
      </ListWrapper>
      {previewItem && (
        <div
          css={css`
            @media (max-width: 767px) {
              padding: 64px 0 0;
            }
          `}
        >
          <SnippetDetails
            onClose={() => navigateToSnippet(null)}
            item={previewItem}
            onTagClick={setSearchTerm}
          />
        </div>
      )}
    </Wrapper>
  )
}
