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
    return this.state.agencyModel$
  }

  async upsert(agency: AgencyEntity) {
    const state = await this.state.agencyModel$.toPromise();
    if(state) {
      return this.useCase.update(agency);
    }

    return this.useCase.create()
  }

  goToList() {
    this.state.add(null);
    this.route.navigate(['agency/list']);
  }

}
