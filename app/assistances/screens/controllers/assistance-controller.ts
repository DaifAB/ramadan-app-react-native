import { Assistance } from '../../../shared/models/assistances.model'
import {AssistanceService} from '../../services/assistance.service';

export class AssistanceController {

  private assistanceService : AssistanceService
  
  constructor() { }

  Add(assistance:Assistance){

    
      
      this.assistanceService.add(assistance);
  }

    async GetAll(){
      let a = await new AssistanceService().getAllAssistances();
   console.log(a);
   ;
}
}
