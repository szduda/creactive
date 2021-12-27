import { Firestore } from "./firebase";

const dbPhotos = Firestore.collection('photos')

export const DataService = {
  fetchItems: async () => {
    const items = [];
    await dbPhotos.get().then(snapshot => {
      snapshot.forEach(doc => {
        const { title, description, url } = doc.data();
        items.push({ id: doc.id, title, description, url })
      });
    })
    return items
  }
}

export default DataService