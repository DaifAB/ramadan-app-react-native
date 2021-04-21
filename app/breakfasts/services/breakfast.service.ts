// @ts-ignore
import firebase from '../../../environments/firebase';

const db = firebase.firestore();


export class BreakfastService {


    constructor(){ }

    add(breakfast : any) {


        if (db) {
            db.collection('breakfasts').add({
                nbPlaces: breakfast.nbPlaces,
                city: breakfast.city,
                description: breakfast.description,
                latitude: breakfast.latitude,
                longitude: breakfast.longitude,
            })
        }

    }



    async getAllBreakfasts() {

            

        const breakfasts = firebase.firestore().collection('breakfasts')
        const querySnapshot = await breakfasts.get()
        const tempDoc = querySnapshot.docs.map((doc:any) => {
          return { id: doc.id, ...doc.data() }
        })
        
        const allBreakfast = tempDoc;
     
      
        return allBreakfast;
    }
}