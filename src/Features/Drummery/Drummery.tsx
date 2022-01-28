/** @jsx jsx */
import { FC } from 'react'
import { jsx, css } from '@emotion/core'
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
    previewId,
    setPreviewId,
    meta: { loading },
  } = useDrummeryContext()
  const previewItem = items.find(({ id }) => id === previewId)
  const placeholders = [...Array(9)].map((_, index) => ({ id: `p-${index}` }))

  return (
    <Wrapper>
      <ListWrapper>
        {(items || placeholders).map(snippet => (
          <ListItem
            {...{
              key: snippet.id,
              item: snippet,
              loading,
              onClick: () =>
                setPreviewId(snippet.id === previewId ? null : snippet.id),
              selected: snippet.id === previewId,
            }}
          />
        ))}
      </ListWrapper>
      {previewItem && (
        <SnippetDetails onClose={() => setPreviewId(null)} item={previewItem} />
      )}
    </Wrapper>
  )
}
