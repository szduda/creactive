import { Firestore } from "./firebase"
import { TPhoto, TDrumSnippet } from "./StateManager"

const dbPhotos = Firestore.collection('photos')

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
  fetchDrumSnippets: async () => {
    return [
      {
        id: 'x',
        title: 'Example snippet',
        description: 'Lorem ipsum',
      }, {
        id: 'y',
        title: 'Another testing item',
        description: 'Lorem ipsum again...',
      }
    ] as TDrumSnippet[]
  }
}

export default DataService
