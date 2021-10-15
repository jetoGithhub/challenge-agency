import { AgencyEntity } from '../domain/angency.entity';
import { Storage } from '../domain/storage-model';
import { AgencyModel } from '../domain/agency-model';

export const createAgencyUseCase = (
  agency: AgencyEntity,
  repository: Storage<AgencyEntity[]>
) => {
  if (agency) {
    return AgencyModel.create(agency, repository);
  }

  return null;
};
