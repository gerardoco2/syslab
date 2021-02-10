import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Unidad } from './../modelos/unidad.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnidadService {
  unidadChanged = new Subject<Unidad>();

  constructor(private http: HttpClient) { }

  getUnidades() {
    return this.http.get('http://localhost:3001/unidades');
  }

  getUnidadById(id: number) {
    return this.http.get('http://localhost:3001/unidades/' + id);
  }

  createUnidad(unidad: Unidad) {
    return this.http.post('http://localhost:3001/unidades/', unidad);
  }

  updateUnidad(id: number, unidad: Unidad) {
    return this.http.put(`http://localhost:3001/unidades/${id}`, unidad);
  }

  deleteUnidad(unidadId: number) {
    return this.http.delete(`http://localhost:3001/unidades/${unidadId}`);
  }
}
