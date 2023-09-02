import { Firestore } from './firebase'
import { TDrumSnippet, TPattern } from './StateManager'
import { storageScope } from './helpers'

const dbDrums = Firestore.collection('drums')

export const DataService = {
  fetchDrumSnippets: async (force: boolean = false) => {
    const items: TDrumSnippet[] = []
    const [snippets, setSnippets] = storageScope<TDrumSnippet[]>('drums', [])
    const [fetchedAt, setFetchedAt] = storageScope<number>('drumsFetchedAt', 0)

    const forceRefetchAfter = 1644283649996
    const shouldRefetch =
      fetchedAt < Math.max(Date.now() - 24 * 360 * 1000, forceRefetchAfter)

    if (shouldRefetch) {
      try {
        await dbDrums.get().then(snapshot => {
          snapshot.forEach(async doc => {
            const {
              title,
              description,
              tags,
              tempo,
              createdAt,
              swing,
              signal,
            } = doc.data()
            items.push({
              id: doc.id,
              title,
              description,
              tags,
              patterns: [],
              tempo,
              createdAt: createdAt?.seconds ?? 0,
              slug: slugify(title),
              swingStyle: swing,
              signal,
            })
          })
        })
        setSnippets(items)
        if (items?.length) setFetchedAt(Date.now())
      } catch (error) {
        console.error('Fetch items error: ', error)
      }
    }

    return items.length ? items : snippets
  },
  fetchPatterns: async (snippet: TDrumSnippet) => {
    const [snippets, setSnippets] = storageScope<TDrumSnippet[]>('drums', [])
    const index = snippets.findIndex(s => s.id === snippet.id)

    try {
      const promises =
        (await dbDrums.doc(snippet.id).get()).data()?.patterns ?? []
      if (promises.length === 0) return []

      const snapshots = await Promise.all(promises.map((p: any) => p.get()))
      snippets[index].patterns = snapshots.map(
        snap => (snap as any).data() as TPattern
      )

      setSnippets([...snippets])
    } catch (error) {
      console.error('Fetch patterns error: ', error)
    }

    return snippets[index].patterns
  },
}

export default DataService

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replaceAll(' ', '_')
    .replace(/\W/g, '')
    .replaceAll('_', '-')
