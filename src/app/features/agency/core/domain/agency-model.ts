import { AgencyEntity } from './angency.entity';
import { Storage } from './storage-model';

export class AgencyModel {
  /**
   * Filtra las agencias y devuelve las coincidencias en funcion del nombre y direccion
   * tomando como referencia una cadena de caracteres
   *
   * @param data
   * @param criteria
   * @returns AgencyEntity[]
   */
  static findByCriteria(
    data: AgencyEntity[],
    criteria: string
  ): AgencyEntity[] {
    return data.filter((agency: AgencyEntity) => {
      return (
        agency.agencia.toLowerCase().includes(criteria.toLowerCase()) ||
        agency.direccion.toLowerCase().includes(criteria.toLowerCase())
      );
    });
  }
  /**
   * Create una nueva agencia en el Storage.
   *
   * @param agency
   * @param repository
   * @returns AgencyEntity[]
   */
  static create(
    agency: AgencyEntity,
    repository: Storage<AgencyEntity[]>
  ): AgencyEntity[] {
    const oldAgencies = repository.getItem() ?? [];
    const newAgencies = [...oldAgencies, agency];
    repository.setItem(newAgencies);

    return newAgencies;
  }
  /**
   * Actualiza una agencia especifica en el Storage
   *
   * @param agency
   * @param storage
   * @returns AgencyEntity[]
   */
  static update(
    agency: AgencyEntity,
    storage: Storage<AgencyEntity[]>
  ): AgencyEntity[] {
    const oldAgencies = storage.getItem() ?? [];
    const agencies = oldAgencies.filter((value, index) => index !== agency.id);
    agencies?.push(agency);
    storage.setItem(agencies);

    return agencies ?? [];
  }
}
