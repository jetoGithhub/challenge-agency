import { Injectable } from '@angular/core';
import { AgencyEntity } from 'src/app/core/entities/angency.entity';
import { LocalStorage } from 'src/app/core/entities/local-storage.entity';

@Injectable({
  providedIn: 'root'
})
export class AgencyStorageRepository extends LocalStorage<AgencyEntity> {
  item = 'agency';
}
