import { Assistance } from '../../../shared/models/assistances.model'
import {AssistanceService} from '../../services/assistance.service';

export class AssistanceController {

  private assistanceService : AssistanceService

  constructor() { }

  Add(assistance:Assistance){

      new AssistanceService().add(assistance);
  }
}
