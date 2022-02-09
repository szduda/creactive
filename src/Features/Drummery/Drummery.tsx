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
        padding: 12px 8px 0;
      }
    `}
    {...props}
  />
)

const ListWrapper = props => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      padding: 0 8px;
      width: 100%;

      @media (min-width: 768px) {
        width: 40%;
      }

      @media (min-width: 1024px) {
        width: 50%;
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
      <ListWrapper>
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
            }}
          />
        ))}
      </ListWrapper>
      {previewItem && (
        <SnippetDetails
          onClose={() => navigateToSnippet(null)}
          item={previewItem}
          onTagClick={setSearchTerm}
        />
      )}
    </Wrapper>
  )
}
