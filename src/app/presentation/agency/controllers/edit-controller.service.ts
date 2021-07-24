import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AgencyEntity } from 'src/app/core/entities/angency.entity';
import { AgencyUseCase } from 'src/app/core/usecase/agency.usecase';
import { AgencyStateService } from 'src/app/data/state/agency-state.service';

@Injectable({
  providedIn: 'root'
})
export class EditControllerService {

  constructor(
    private useCase:  AgencyUseCase,
    private state: AgencyStateService,
    private route: Router,
  ) { }

  get agency() {
    return this.state.agency;
  }

  async upsert(newAgency: AgencyEntity) {
    const state = await this.state.agency;
    console.log(state.agencia);
    if(state?.agencia) {
      return this.useCase.update({...state, ...newAgency});
    }

    return this.useCase.create(newAgency)
  }

  goToList() {
    this.route.navigate(['agency/list']);
  }

  destroy() {
    this.state.add({} as AgencyEntity);
  }
}
