/** @jsx jsx */
import { FC } from 'react'
import { jsx, css } from '@emotion/core'
import { ListItem, SnippetDetails, TDrummery } from './'

const Wrapper = (props) => (
  <div
    css={css`
      display: flex;
      align-items: flex-start;
      padding: 0 8px;
      width: 100%;
    `}
    {...props}
  />
)

const ListWrapper = (props) => (
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
        width: 30%;
      }
    `}
    {...props}
  />
)

export const Drummery: FC<TDrummery> = ({ useDrummeryContext }) => {
  const { items, previewId, setPreviewId, meta } = useDrummeryContext()
  const previewItem = items.find(({ id }) => id === previewId)

  return (
    <Wrapper>
      <ListWrapper>
        {meta.loading ? (
          <p>Loading...</p>
        ) : (
          items.map((snippet) => (
            <ListItem
              {...{
                key: snippet.id,
                item: snippet,
                onClick: () => setPreviewId(snippet.id),
                selected: snippet.id === previewId
              }}
            />
          ))
        )}
      </ListWrapper>
      {previewItem && (
        <SnippetDetails onClick={() => setPreviewId(null)} item={previewItem} />
      )}
    </Wrapper>
  )
}
