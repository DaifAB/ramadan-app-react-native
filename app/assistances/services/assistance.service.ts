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

     getAllAssistances(){

    let allAssistance:any;

        const allAssistances =  db
        .collection("assistances")
        .onSnapshot((querySnapshot : any) => {
          const data =  querySnapshot.docs.map((doc : any) => ({
            ...doc.data(),
            id: doc.id,
          }));
        //   data.map((d:any)=>{
        //     allAssistance = d;
        //     console.log(allAssistance)
        //   })
          allAssistance = data;
          return  data;         
        });

        // console.log('====================================');
         console.log(allAssistances);
        // console.log('====================================');
        // return allAssistance;
    }
}