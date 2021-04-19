import { RamadanI } from '../interfaces/ramadan-i';

export class Ramadan implements RamadanI {
    id: number;
    username: string;
    message: string;
    latitude: Number;
    longitude: Number;

  constructor(o?: Partial<Ramadan>) {
    if (o){
      Object.assign(this, o);
    }
  }

  hola(){
      console.log('test hola')
  }
}
