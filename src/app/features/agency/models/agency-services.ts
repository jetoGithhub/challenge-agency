import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AgencyEntity } from 'src/app/core/entities/angency.entity';
import { RESTServices } from 'src/app/core/entities/rest-services.entity';

@Injectable({
  providedIn: 'root'
})
export class AgencyServices implements RESTServices<Observable<AgencyEntity[]>> {
  enpoint = 'assets/agency.json'

  constructor(private http: HttpClient) { }

  find():Observable<AgencyEntity[]> {
    return this.http.get<AgencyEntity[]>(this.enpoint, { observe: 'body' })
    .pipe(
      delay(2000)
    )
  }
}
