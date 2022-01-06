import { TDrumSnippet } from '../../StateManager'

export type TDrummery = {
  useDrummeryContext(): {
    items: TDrumSnippet[]
    previewId: string
    setPreviewId(id: string | null): void
    meta: {
      loading: boolean
    }
  }
}
