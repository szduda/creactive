import { TDrumSnippet } from '../../StateManager'

export type TDrummery = {
  useDrummeryContext(): {
    items: TDrumSnippet[]
    featuredItem: TDrumSnippet
    previewId: string
    setPreviewId(id: string | null): void
    setSearchTerm(term: string): void
    meta: {
      loading: boolean
    }
  }
}
