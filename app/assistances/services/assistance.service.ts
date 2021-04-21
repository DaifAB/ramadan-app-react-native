// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";

// @ts-ignore
import firebase from '../../../environments/firebase';

const db = firebase.firestore();


export class AssistanceService {


    constructor(){ }

    add(assistance : any) {


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


    async getAllAssistances() {

            

        const assistances = firebase.firestore().collection('assistances')
        const querySnapshot = await assistances.get()
        const tempDoc = querySnapshot.docs.map((doc:any) => {
          return { id: doc.id, ...doc.data() }
        })
        // console.log('====================================');
        // console.log(tempDoc);
        // console.log('====================================');
        const allAssistances = tempDoc;
     
        // console.log('********************************');
        // console.log(allAssistances);
        // console.log('********************************');
        return allAssistances;
    }


}