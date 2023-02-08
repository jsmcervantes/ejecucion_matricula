import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsistenciaPersona } from './asistencia-persona';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaPersonaService {

  constructor(private http: HttpClient) { }

  personUrl: string = `http://localhost:8000/api/persona`;

  getPersons() {
    return this.http.get(this.personUrl);
  }

  getPerson(id: number) {
    return this.http.get<AsistenciaPersona>(`${this.personUrl}/${id}`);
  }
}
