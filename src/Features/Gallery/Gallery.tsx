/** @jsx jsx */
import { FC, useState, useLayoutEffect } from 'react'
import { jsx, css } from '@emotion/react'
import { Photo } from './Photo'
import { TPhoto } from '../../StateManager'
import { PreviewModal, TGallery } from '.'

const Wrapper = props => (
  <div
    css={css`
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      padding: 0 8px;
    `}
    {...props}
  />
)

export const Gallery: FC<TGallery> = ({ useGalleryContext }) => {
  const { items, previewId, setPreviewId, meta } = useGalleryContext()
  const previewItem = items.find(({ id }) => id === previewId)

  const calcHeight = () => ((0.33333 * (window.innerWidth - 16) - 16) * 2) / 3
  const [photoHeight, setPhotoHeight] = useState(calcHeight())

  useLayoutEffect(() => {
    const recalcLayout = () => {
      setPhotoHeight(calcHeight())
    }
    window.addEventListener('resize', recalcLayout)
    return () => window.removeEventListener('resize', recalcLayout)
  }, [])

  let shouldBreak = false
  let i = 0
  let layoutItems: {
    photo: TPhoto
    style: {
      marginTop: string
      marginLeft: string
      maxHeight: string
    }
  }[] = []
  let lastRowVerticals = [false, false, false]

  while (i <= items.length) {
    if (shouldBreak) break

    const rowOffset = lastRowVerticals.filter(v => v).length
    let indexOffset = 0

    // eslint-disable-next-line no-loop-func
    lastRowVerticals = lastRowVerticals.map(lastVertical => {
      if (lastVertical) {
        indexOffset += 1
        return false
      }

      const photo = items[i]

      if (!photo) {
        shouldBreak = true
        return false
      }

      layoutItems.push({
        photo,
        style: {
          marginTop: rowOffset ? `-${photoHeight + 16}px` : '',
          marginLeft: `${indexOffset * 33.333}%`,
          maxHeight: `${(photoHeight - 0) * 2 + 16}px`,
        },
      })

      i += 1
      indexOffset = 0
      return photo.vertical
    })
  }

  return (
    <Wrapper>
      {meta.loading ? (
        <p>Loading...</p>
      ) : (
        layoutItems.map(({ photo, style }) => (
          <Photo
            {...{
              key: photo.id,
              item: photo,
              onClick: () => setPreviewId(photo.id),
              maxHeight: style?.maxHeight,
              ...(style && {
                css: css`
                  @media (min-width: 1024px) {
                    margin-top: ${style.marginTop};
                    margin-left: ${style.marginLeft};
                  }
                `,
              }),
            }}
          />
        ))
      )}
      {previewItem && (
        <PreviewModal onClick={() => setPreviewId(null)} item={previewItem} />
      )}
    </Wrapper>
  )
}
