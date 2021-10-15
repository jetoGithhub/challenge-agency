import { Injectable } from '@angular/core';
import { AgencyEntity } from '../core/domain/angency.entity';

@Injectable({
  providedIn: 'root',
})
export class AgencyStateService {
  private agencyModel: AgencyEntity = {} as AgencyEntity;

  get agency() {
    return this.agencyModel;
  }

  add(data: AgencyEntity) {
    this.agencyModel = { ...data };
  }

  reset() {
    this.agencyModel = {} as AgencyEntity;
  }
}
