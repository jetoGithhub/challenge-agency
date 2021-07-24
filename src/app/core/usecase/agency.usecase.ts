import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { AgencyHttpRepository } from "src/app/data/repository/agency-http.repository";
import { AgencyStorageRepository } from "src/app/data/repository/agency-storage.repository";
import { AgencyEntity } from "../entities/angency.entity";

@Injectable({
  providedIn: 'root'
})
export class AgencyUseCase {

  constructor(
    private agencyHttpRepository: AgencyHttpRepository,
    private agencyStorageRepository: AgencyStorageRepository
  ) {}

  find(): Observable<AgencyEntity[] | null | any> {

    if(this.agencyStorageRepository.exist()) {
      return of(this.agencyStorageRepository.getItem());
    }

    return this.agencyHttpRepository.find().pipe(
      map(agency => {
        this.agencyStorageRepository.setItem(agency)
        return agency;
      })
    );
  }

  create(agency: AgencyEntity) {
    const agencies = this.agencyStorageRepository.getItem() || [];
    agencies.push(agency);

    this.agencyStorageRepository.setItem(agencies);

    console.log(agencies, agency);

    return agencies;
  }

  update(agency: AgencyEntity) {
    const { id, ...rest} = agency;
    const agencies = this.agencyStorageRepository.getItem() || [];
    agencies[Number(id)] = rest;

    this.agencyStorageRepository.setItem(agencies);

    return agencies;
  }
}
