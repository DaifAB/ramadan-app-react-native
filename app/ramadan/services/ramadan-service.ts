import admin from 'firebase-admin';

import Timestamp = admin.firestore.Timestamp;

export class RamadanService {
    constructor(){ }

    add(ramadan : any) {
        console.log(ramadan);
        console.log("ajouté le :"+Timestamp);
        /*
        *
        *
        * Ici c'est le code d'insertion dans la base de données Firestore
        * 
        */ 
      }
}