/** @jsx jsx */
/** @jsxFrag */
import React, { FC } from 'react'
import { jsx, css } from '@emotion/react'
import { H3, H2, Button, Flex } from '../theme'
import { ListItem, SnippetDetails, TDrummery } from './'

export const Drummery: FC<TDrummery> = ({ useDrummeryContext }) => {
  const {
    items,
    featuredItem,
    slug,
    navigateToSnippet,
    searchTerm,
    setSearchTerm,
    meta: { loading },
  } = useDrummeryContext()
  const placeholders = [...Array(9)].map((_, index) => ({ id: `p-${index}` }))
  const previewItem = items.find(snippet => snippet.slug === slug)
  return (
    <Wrapper>
      <ListWrapper mobileHidden={Boolean(previewItem)}>
        {!items?.length && !loading && (
          <NoResults {...{ searchTerm, setSearchTerm }} />
        )}
        {featuredItem && (
          <Flex.Col
            css={css`
              margin-bottom: 24px;
              @media (max-width: 767px) {
                display: ${searchTerm ? 'none' : 'flex'};
              }
            `}
          >
            <H3>Recently added</H3>
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
          </Flex.Col>
        )}
        {loading || items?.length ? (
          <H3>
            {searchTerm ? `Search results for "${searchTerm}"` : 'All rhythms'}
          </H3>
        ) : null}
        {(loading ? placeholders : items).map(snippet => (
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
        <ContentWrapper>
          <SnippetDetails
            onClose={() => navigateToSnippet(null)}
            item={previewItem}
            onTagClick={setSearchTerm}
          />
        </ContentWrapper>
      )}
    </Wrapper>
  )
}

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

const ContentWrapper = props => (
  <div
    css={css`
      overflow-y: auto;
      height: calc(100vh - 100px);
      width: 100%;
      @media (max-width: 767px) {
        padding: 64px 0 0;
      }

      @media (min-width: 768px) {
        padding: 0 16px;
      }

      @media (min-width: 1024px) {
        padding: 0 16px 0 24px;
      }

      @media (min-width: 1440px) {
        padding: 0 16px 0 64px;
      }
    `}
    {...props}
  />
)

const NoResults = ({ searchTerm, setSearchTerm }) => (
  <div
    css={css`
      margin-bottom: 36px;
      margin-top: 36px;

      @media (min-width: 768px) {
        order: 3;
        margin-top: 46px;
      })
    `}
  >
    <H2>{searchTerm}?</H2>
    <p>I don't know a rhytm called {searchTerm} yet.</p>
    <Button
      filled
      onClick={() => setSearchTerm('')}
      css={css`
        margin: 24px 0 36px;
      `}
    >
      Show all rhythms
    </Button>
  </div>
)
