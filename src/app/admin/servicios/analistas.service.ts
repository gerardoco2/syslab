import { Injectable } from '@angular/core';
import { Analista } from './../modelos/analista.model';

@Injectable({
  providedIn: 'root'
})
export class AnalistasService {

  constructor() { }

  addAnalista(analista: Analista) {
    console.log('from the service', analista);
  }
}
