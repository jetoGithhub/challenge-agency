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

  create() {}

  update(agency: AgencyEntity) {
    const agencies = this.agencyStorageRepository.getItem();
    const newAgencies = agencies?.map((data) => {
      if(data.agencia === agency.agencia) {
        return { ...data, ...agency };
      }

      return data;
    });
    this.agencyStorageRepository.setItem(newAgencies);

    return newAgencies;
  }
}
