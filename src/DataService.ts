import { Firestore } from './firebase'
import { TPhoto, TDrumSnippet, TPattern } from './StateManager'
import { storageScope } from './helpers'

const dbPhotos = Firestore.collection('photos')
const dbDrums = Firestore.collection('drums')

export const DataService = {
  fetchPhotos: async () => {
    const items: TPhoto[] = []
    await dbPhotos.get().then(snapshot => {
      snapshot.forEach(doc => {
        const { title, description, url, vertical } = doc.data()
        items.push({ id: doc.id, title, description, url, vertical })
      })
    })
    return items
  },
  fetchDrumSnippets: async (force: boolean = false) => {
    const items: TDrumSnippet[] = []
    const [snippets, setSnippets] = storageScope<TDrumSnippet[]>('drums', [])
    const [fetchedAt, setFetchedAt] = storageScope<number>('drumsFetchedAt', 0)

    if (fetchedAt < Date.now() - 24 * 360 * 1000) {
      try {
        await dbDrums.get().then(snapshot => {
          snapshot.forEach(async doc => {
            const { title, description, tags, tempo } = doc.data()
            items.push({
              id: doc.id,
              title,
              description,
              tags,
              patterns: [],
              tempo,
            })
          })
        })
        setSnippets(items)
        setFetchedAt(Date.now())
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
