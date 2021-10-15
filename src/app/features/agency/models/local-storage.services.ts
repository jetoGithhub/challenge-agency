import { Injectable } from '@angular/core';
import { AgencyEntity } from '../core/domain/angency.entity';
import { Storage } from '../core/domain/storage-model';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageServices extends Storage<AgencyEntity[]> {
  item = 'agency';
  storage = window.localStorage;
}
