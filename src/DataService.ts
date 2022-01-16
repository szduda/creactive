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
    const items: TDrumSnippet[] = []
    items.push({
      id: 'x',
      title: 'Djansa groove',
      description: 'Simple dundun set arrangement of the popular rhythm.',
      tags: [
        '4/4',
        'Mali',
        'Khassonke',
        'dundun set',
      ],
      files: [{
        title: 'djansa-duns',
        type: 'pcc',
        url: '.',
      }, {
        title: 'djansa-duns',
        type: 'pdf',
        url: '.',
      }]
    }, {
      id: 'y',
      title: 'Soli swing',
      description: 'Lorem ipsum again...',
      tags: [
        '6/8',
        'pra pyty pyty pyty',
      ],
      files: [],
    })
    return items
  }
}

export default DataService
