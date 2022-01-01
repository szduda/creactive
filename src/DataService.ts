import { Firestore } from "./firebase"
import { TPhoto } from "./StateManager/definitions/TPhoto"

const dbPhotos = Firestore.collection('photos')

export const DataService = {
  fetchItems: async () => {
    const items: TPhoto[] = []
    await dbPhotos.get().then(snapshot => {
      snapshot.forEach(doc => {
        const { title, description, url, vertical } = doc.data()
        items.push({ id: doc.id, title, description, url, vertical })
      });
    })
    return items
  }
}

export default DataService