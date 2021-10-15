import { Observable } from 'rxjs';
import { RESTServices } from 'src/app/features/agency/core/domain/rest-services.entity';
import { AgencyEntity } from '../domain/angency.entity';
import { Storage } from '../domain/storage-model';

export const listAgencyUseCase = async (
  agencyServices: RESTServices<Observable<AgencyEntity[]>>,
  storage: Storage<AgencyEntity[]>,
  reloadAgencies = false,
) => {
  if (storage.exist() && !reloadAgencies) {
    return storage.getItem() ?? [];
  }

  const response = await agencyServices.find().toPromise();
  if (response && response.length) {
    const agencies = [...response];
    storage.setItem(agencies);

    return agencies;
  }

  return [];
};
