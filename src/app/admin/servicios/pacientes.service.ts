
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

  getPacienteByCedula(ced: string) {
    return this.http.get('http://localhost:3001/pacientes/' + ced);
  }

  create(paciente: Paciente) {
    return this.http.post('http://localhost:3001/pacientes', paciente);
  }

  //pacienteId sera una cedula la cual es string para efectos de esta interfaz
  updatePaciente(pacienteId: string, paciente: Paciente) {
    return this.http.put(`http://localhost:3001/pacientes/${pacienteId}`, paciente);
  }

}
