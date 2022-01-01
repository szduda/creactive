/** @jsx jsx */
import { FC, useState, useLayoutEffect } from 'react'
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
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  padding: 0 8px;
  `} {...props} />
)

type TPhotos = {
  items: TPhoto[]
  previewId: string
  setPreviewId(id: string): void
  photoHeight: number
}

const Photos: FC<TPhotos> = ({ items, previewId, setPreviewId, photoHeight }) => {
  let i = 0
  let layoutItems: {
    photo: TPhoto
    style?: object
  }[] = []
  let lastRowVerticals = [false, false, false]

  while (i <= items.length) {
    const rowSpace = 3 - lastRowVerticals.filter(vertical => vertical).length
    const row = items.slice(i, i + rowSpace)

    row.map((photo, photoIndex) => layoutItems.push({
      photo,
      style: {
        marginTop: lastRowVerticals.indexOf(true) >= 0 ? `-${photoHeight + 16}px` : '',
        marginLeft: lastRowVerticals[photoIndex] ? '33.333%' : '',
        maxHeight: `${(photoHeight - 0) * 2 + 16}px`,
      }
    }))

    // todo: fix to always have lenght of 3
    lastRowVerticals = row.map(({ vertical }, index) => vertical)
    i += rowSpace
  }

  return layoutItems.map(({ photo, style }) => (
    <Photo {...{
      key: photo.id,
      item: photo,
      selected: previewId === photo.id,
      onClick: () => setPreviewId(photo.id),
      style
    }} />
  ))
}

export const Gallery: FC<TGallery> = ({ useGalleryContext }) => {
  const { items, previewId, setPreviewId } = useGalleryContext()
  const previewItem = items.find(({ id }) => id === previewId)

  const calcHeight = () => (0.33333 * (window.innerWidth - 16) - 16) * 2 / 3
  const [photoHeight, setPhotoHeight] = useState(calcHeight())

  useLayoutEffect(() => {
    const recalcLayout = () => {
      setPhotoHeight(calcHeight())
    }
    window.addEventListener('resize', recalcLayout)
    return () => window.removeEventListener('resize', recalcLayout)
  }, [])

  return (
    <Wrapper>
      {items?.length ? <Photos {...{ items, previewId, setPreviewId, photoHeight }} /> : null}
      {previewItem && <PreviewModal onClick={() => setPreviewId(null)} item={previewItem} />}
    </Wrapper>
  )
}