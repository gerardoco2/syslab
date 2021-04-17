import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TipoExamen } from './../modelos/tipo-examen.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoExamenService {
  tExChanged = new Subject<TipoExamen>();

  constructor(private http: HttpClient) { }


  getTipoExamens() {
    return this.http.get('http://localhost:3001/tipo-examen');
  }

  createTipoExamen(tipoExamen: TipoExamen) {
    return this.http.post('http://localhost:3001/tipo-examen', tipoExamen);
  }

  deleteTipoExamen(tipoExamenId: number) {
    return this.http.delete(`http://localhost:3001/tipo-examen/${tipoExamenId}`);
  }

  itemsByTipoExamen(tipoExamenId: string) {
    return this.http.get(`http://localhost:3001/tipo-examen/${tipoExamenId}/items`);
  }

}
