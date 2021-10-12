import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { AgencyEntity } from '../core/domain/angency.entity';
import { filterAgencyUseCase } from '../core/uses-cases/filter-agency.usecase';
import { listAgencyUseCase } from '../core/uses-cases/list-agency.usecase';
import { AgencyServices } from '../models/agency-services';

@Injectable({
  providedIn: 'root',
})
export class ListAgencyPresenter {
  private _isLoading = new BehaviorSubject<boolean>(true);

  private _agencies = new BehaviorSubject<AgencyEntity[]>([]);

  isLoading$ = this._isLoading.asObservable();

  agencies$ = this._agencies.asObservable();

  constructor(private services: AgencyServices) {}

  async loadAgencies() {
    const resp = await listAgencyUseCase(this.services);
    this._agencies.next(resp);
    this._isLoading.next(false);
  }

  async findAgency(stream: string) {
    const agencies = await this.agencies$.pipe(take(1)).toPromise();

    const filterAgency = filterAgencyUseCase(agencies, stream);
    this._agencies.next(filterAgency);
  }
}
