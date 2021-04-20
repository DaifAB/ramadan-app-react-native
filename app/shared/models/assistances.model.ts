import { RamadanI } from '../interfaces/ramadan-i';

export class Assistance implements RamadanI {

    nbPlaces: Number;
    city: string;
    description: string;
    latitude: Number;
    longitude: Number;
  

  constructor(o?: Partial<Assistance>) {
    if (o){
      Object.assign(this, o);
    }
  }

 
}
