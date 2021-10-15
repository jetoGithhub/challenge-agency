import { AgencyEntity } from '../domain/angency.entity';
import { Storage } from '../domain/storage-model';
import { AgencyModel } from '../domain/agency-model';

export const updateAgencyUseCase = (
  agency: AgencyEntity,
  storage: Storage<AgencyEntity[]>
) => {
  if (agency) {
    return AgencyModel.update(agency, storage);
  }

  return null;
};
