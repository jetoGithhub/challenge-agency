import { Injectable } from '@angular/core';
import { AgencyStateService } from '../../models/agency-state.service';
import { Router } from '@angular/router';
import { AgencyEntity } from '../../core/domain/angency.entity';
import { createAgencyUseCase } from '../../core/uses-cases/create-agency.usecase';
import { LocalStorageServices } from '../../models/local-storage.services';
import { updateAgencyUseCase } from '../../core/uses-cases/update-agency.usecase';

@Injectable({
  providedIn: 'root',
})
export class EditAgencyPresenter {
  constructor(
    public store: AgencyStateService,
    private router: Router,
    private storage: LocalStorageServices
  ) {}

  goToAgencyList() {
    this.store.reset();
    this.router.navigateByUrl('agency/list');
  }

  submit(agency: AgencyEntity) {
    if (agency?.id) {
      updateAgencyUseCase(agency, this.storage);
    } else {
      createAgencyUseCase(agency, this.storage);
    }

    this.goToAgencyList();
  }
}
