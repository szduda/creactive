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
    previewItem,
    setPreviewId,
    setSearchTerm,
    meta: { loading },
  } = useDrummeryContext()
  const placeholders = [...Array(9)].map((_, index) => ({ id: `p-${index}` }))
  return (
    <Wrapper>
      <ListWrapper>
        {featuredItem && (
          <>
            <H3>Recently added</H3>
            <ListItem featured
              {...{
                key: featuredItem.id,
                item: featuredItem,
                onClick: () =>
                  setPreviewId(featuredItem.id === previewItem?.id ? null : featuredItem.id),
              }}
            />
          </>
        )}
        <H3>All rhythms</H3>
        {(items.length ? items : placeholders).map(
          snippet => (
            <ListItem
              {...{
                key: snippet.id,
                item: snippet,
                loading,
                onClick: () =>
                  setPreviewId(snippet.id === previewItem?.id ? null : snippet.id),
                selected: snippet.id === previewItem?.id,
              }}
            />
          )
        )}
      </ListWrapper>
      {previewItem && (
        <SnippetDetails
          onClose={() => setPreviewId(null)}
          item={previewItem}
          onTagClick={setSearchTerm}
        />
      )}
    </Wrapper>
  )
}
