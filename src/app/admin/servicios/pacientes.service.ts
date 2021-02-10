
import { Paciente } from '../modelos/paciente.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  patientSelected = new Subject<number>();
  pacienteStarEdit = new Subject<number>();

  constructor(private http: HttpClient) { }

  getPacientes() {
    return this.http.get('http://localhost:3001/pacientes');
  }

  getPacienteById(id: number) {
    return this.http.get('http://localhost:3001/pacientes/' + id);
  }
  create(paciente: Paciente) {
    return this.http.post('http://localhost:3001/pacientes', paciente);
  }

  updatePaciente(pacienteId: number, paciente: Paciente) {
    return this.http.put(`http://localhost:3001/pacientes/${pacienteId}`, paciente);
  }

}
