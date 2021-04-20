import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const db = firebase.firestore();

export class AssistanceService {
    constructor(){ }

    add(assistance : any) {

        console.log('====================================');
    console.log(assistance);
    console.log('========================fffffffffff============');


        if (db) {
            db.collection('assistances').add({
                nbPlaces: assistance.nbPlaces,
                city: assistance.city,
                description: assistance.description,
                latitude: assistance.latitude,
                longitude: assistance.longitude,
    
            })
        }
       
     
      }
}