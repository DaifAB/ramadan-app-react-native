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
}