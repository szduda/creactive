
export type TDrumSnippet = {
  id: string
  title: string
  description?: string
  tags: string[]
  files: Array<{
    title: string,
    type: 'audio' | 'pcc' | 'pdf',
    url: string,
  }>,
}
