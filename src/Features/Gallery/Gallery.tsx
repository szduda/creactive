/** @jsx jsx */
import { FC } from 'react'
import { jsx, css, } from '@emotion/core'
import { sortByDesc } from '../../appHelper'
import { Photo } from './Photo'
import { TPhoto } from '../../StateManager/definitions/TPhoto'
import { PreviewModal } from '.'


export type TGallery = {
  useGalleryContext(): {
    items: TPhoto[]
    previewId: string
    setPreviewId(id: string | null): void
  }
}

const Wrapper = props => (
  <div css={css`
  padding: 80px 4px 0;
  display: flex;
  flex-direction: column;

  @media (orientation: landscape) {
    padding-top: 16px;
  }
  `} {...props} />
)

export const Gallery: FC<TGallery> = ({ useGalleryContext }) => {
  const { items, previewId, setPreviewId } = useGalleryContext()
  const previewItem = items.find(({ id }) => id === previewId)
  return (
    <Wrapper>
      {items.sort(sortByDesc('dateAdded')).map((item, key) =>
        <Photo {...{
          key,
          item,
          selected: previewId === item.id,
          onClick: () => setPreviewId(item.id),
        }} />
      )}
      {previewItem && <PreviewModal onClick={() => setPreviewId(null)} item={previewItem} />}
    </Wrapper>
  )
}