import { Firestore } from './firebase'
import { TPhoto, TDrumSnippet, TPattern } from './StateManager'

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
  fetchDrumSnippets: async (searchTerm: string = '') => {
    const items: TDrumSnippet[] = []

    const filters = searchTerm
      .toLowerCase()
      .split(' ')
      .filter(f => f)

    const request = filters.length
      ? dbDrums.where('tags', 'array-contains-any', filters)
      : dbDrums
    await request.get().then(snapshot => {
      snapshot.forEach(async doc => {
        const { title, description, tags, patterns, tempo } = doc.data()
        items.push({
          id: doc.id,
          title,
          description,
          tags,
          patterns,
          tempo,
        })
      })
    })

    return items
  },
  fetchPatterns: async patternsPromises => {
    if (!patternsPromises?.length) return []

    const snapshots = await Promise.all(patternsPromises.map(p => p.get()))
    const patterns = snapshots.map(snap => (snap as any).data() as TPattern)

    return patterns
  },
}

export default DataService
