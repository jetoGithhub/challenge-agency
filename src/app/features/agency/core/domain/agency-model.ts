import { AgencyEntity } from "./angency.entity";

export class AgencyModel {
  static findByCriteria(data: AgencyEntity[], criteria: string): AgencyEntity[] {
    return  data.filter((agency: AgencyEntity) => agency.agencia.toLowerCase().includes(criteria.toLowerCase())
    || agency.direccion.toLowerCase().includes(criteria.toLowerCase()));
  }
}
