import { Ramadan } from '../../../shared/models/ramadan.model'
import {RamadanService} from '../../services/ramadan-service';

export class RamadanController {
  private ramadanService : RamadanService;
  
  constructor() { }

  Add(ramadan:Ramadan){
      console.log('To Add on service')
      this.ramadanService.add(ramadan);
  }
}
