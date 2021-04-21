import { Breakfast } from '../../../shared/models/breakfast.model'
import {BreakfastService} from '../../services/breakfast.service';

export class BreakfastController {

  private assistanceService : BreakfastService
  
  constructor() { }

  Add(breakfast:Breakfast){
    new BreakfastService().add(breakfast);
  }

  async GetAll(){
    let breakfasts = await new BreakfastService().getAllBreakfasts();

  return breakfasts
}
}
