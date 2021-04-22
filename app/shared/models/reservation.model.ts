import { ReservationI } from '../interfaces/reservation-i';

export class Reservation implements ReservationI {

    name: string;
    city: string;
    type : string;
   
  

  constructor(o?: Partial<Reservation>) {
    if (o){
      Object.assign(this, o);
    }
  }

 
}
