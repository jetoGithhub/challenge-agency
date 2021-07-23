import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AgencyEntity } from 'src/app/core/entities/angency.entity';
import { AgencyUseCase } from 'src/app/core/usecase/agency.usecase';
import { AgencyStateService } from 'src/app/data/state/agency-state.service';

@Injectable({
  providedIn: 'root'
})
export class ListControllerService {
  agency: any = {
    original: [],
    info: [],
  }

  constructor(
    private useCase:  AgencyUseCase,
    private state: AgencyStateService,
    private route: Router,
  ) { }

  getAgency(): Observable<AgencyEntity[]> {
    return this.useCase.find().pipe(
      map((agencies) => {
        this.agency.original = agencies;
        this.agency.info = { ...this.agency.original };

        return agencies;
      })
    );
  }

  filterAngency(stream: String) {
    const { agency } = this;
    if(stream) {
      return this.agency.info = agency.original.filter((a: any) =>{
        return a.agencia.toLowerCase().includes(stream.toLowerCase())
        || a.direccion.toLowerCase().includes(stream.toLowerCase());
      })
    }

    return this.agency.info = { ...this.agency.original };
  }

  goToAgencyform(agency: AgencyEntity | void) {
    if(agency) {
      this.state.add(agency);
    }

    this.route.navigate(['agency/edit']);
  }

}
