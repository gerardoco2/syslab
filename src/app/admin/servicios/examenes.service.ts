import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Examen } from '../modelos/examen.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamenesService {
  examenes: Examen[];
  examenesChanged = new Subject<Examen[]>();

  constructor(private httpClient: HttpClient) { }

  getExamenes() {
    return this.httpClient.get("http://localhost:3001/examenes");
  }

  getExamenById(id: string) {
    return this.httpClient.get(`http://localhost:3001/examenes/${id}`);
  }

  createExamen(examen: Examen) {
    return this.httpClient.post('http://localhost:3001/examenes', examen);
  }

  eliminacionLogica(examenId: number) {
    return this.httpClient.put(`http://localhost:3001/examenes/${examenId}/delete`, {});
  }

  actualizarListaExamenes() {
    this.getExamenes().subscribe(
      (examenes: Examen[]) => {
        this.examenes = examenes;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.examenesChanged.next(this.examenes)
      }
    );
  }
}

