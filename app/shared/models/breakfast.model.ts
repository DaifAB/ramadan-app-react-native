import { RamadanI } from '../interfaces/ramadan-i';

export class Breakfast implements RamadanI {

    nbPlaces: Number;
    city: string;
    description: string;
    latitude: Number;
    longitude: Number;
  

  constructor(o?: Partial<Breakfast>) {
    if (o){
      Object.assign(this, o);
    }
  }

 
}
