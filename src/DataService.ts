import { Firestore } from './firebase'
import { TPhoto, TDrumSnippet, TPattern } from './StateManager'

const dbPhotos = Firestore.collection('photos')
const dbDrums = Firestore.collection('drums')

export const DataService = {
  fetchPhotos: async () => {
    const items: TPhoto[] = []
    await dbPhotos.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        const { title, description, url, vertical } = doc.data()
        items.push({ id: doc.id, title, description, url, vertical })
      })
    })
    return items
  },
  fetchDrumSnippets: async () => {
    const items: TDrumSnippet[] = []

    await dbDrums.get().then((snapshot) => {
      snapshot.forEach(async (doc) => {
        const { title, description, tags, patterns } = doc.data()
        items.push({
          id: doc.id,
          title,
          description,
          tags,
          patterns,
        })
      })
    })

    return items
  },
  fetchPatterns: async (patterns) => {
    if (!patterns?.length) return []

    const snapshots = await Promise.all(patterns.map((p) => p.get()))
    return snapshots.map((snap) => (snap as any).data() as TPattern)
  },
}

export default DataService
