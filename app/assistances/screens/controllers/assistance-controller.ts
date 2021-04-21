import { Assistance } from '../../../shared/models/assistances.model'
import {AssistanceService} from '../../services/assistance.service';

export class AssistanceController {

  private assistanceService : AssistanceService

  constructor() { }

  Add(assistance:Assistance){

      new AssistanceService().add(assistance);
  }

    async GetAll(){
      let assistances = await new AssistanceService().getAllAssistances();
  
  //  console.log('====================222================');
  //  console.log(assistances);
  //  console.log('====================================');
  return assistances
}
}
