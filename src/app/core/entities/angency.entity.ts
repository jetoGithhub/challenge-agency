export interface AgencyEntity {
  agencia: string;
  distrito: string;
  provincia: string;
  departamento: string;
  direccion: string;
  lat: number;
  lon: number;
  [key: string]: string | number;
}
