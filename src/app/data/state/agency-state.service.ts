import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AgencyEntity } from 'src/app/core/entities/angency.entity';

@Injectable({
  providedIn: 'root'
})
export class AgencyStateService {
  private agencyModel = new Subject<AgencyEntity | null>();

  agencyModel$ = this.agencyModel.asObservable();

  add(data: AgencyEntity | null) {
    if(data) {
      this.agencyModel.next(data);
    }
  }
}
