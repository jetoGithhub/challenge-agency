import { AgencyEntity } from '../domain/angency.entity';
import { AgencyModel } from '../domain/agency-model';

let DATA_ENTRY: AgencyEntity[] = [];

export const filterAgencyUseCase = (
  data: AgencyEntity[],
  criteria: string
): AgencyEntity[] => {
  if (DATA_ENTRY.length === 0) {
    DATA_ENTRY = [...data];
  }

  if (criteria === '') {
    const resp = [...DATA_ENTRY];

    DATA_ENTRY = [];

    return resp;
  }

  return AgencyModel.findByCriteria(DATA_ENTRY, criteria);
};
