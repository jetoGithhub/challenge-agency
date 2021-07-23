import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { AgencyEntity } from 'src/app/core/entities/angency.entity';

@Injectable({
  providedIn: 'root'
})
export class AgencyHttpRepository {
  enpoint = 'assets/agency.json'

  constructor(private http: HttpClient) { }

  find(): Observable<AgencyEntity[]> {
    return this.http.get<AgencyEntity[]>(this.enpoint, { observe: 'body' })
  }

  findById() {}

  create() {}

  edit() {}
}
