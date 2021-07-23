export interface AgencyEntity {
  agencia: String;
  distrito: String;
  provincia: String;
  departamento: String;
  direccion: String;
  lat: Number;
  lon: Number;
  [key: string]: String | Number;
}
