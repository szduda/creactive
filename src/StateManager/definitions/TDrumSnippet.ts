export type TDrumSnippet = {
  id: string
  title: string
  slug: string
  description?: string
  tags: string[]
  patterns?: TPattern[]
  tempo?: number
  createdAt: number
  swingStyle?: SwingStyle
  signal: string
}

export type TPattern = {
  title: string
  instrument: 'dundunba' | 'sangban' | 'kenkeni' | 'kenkeni2' | 'bell'
  pattern: string
}

export type SwingStyle = '' | '>' | '>>' | '<<' | '-->' | '--<'

