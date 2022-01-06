import { TPhoto } from '../../StateManager'

export type TGallery = {
  useGalleryContext(): {
    items: TPhoto[]
    previewId: string
    setPreviewId(id: string | null): void
    meta: {
      loading: boolean
    }
  }
}
