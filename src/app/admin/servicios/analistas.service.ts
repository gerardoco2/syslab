import { Injectable } from '@angular/core';
import { Analista } from './../modelos/analista.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalistasService {
  analistas: Analista[];
  analistasChanged = new Subject<Analista[]>();
  analistaStartEdit = new Subject<number>();

  constructor(private httpClient: HttpClient) { }

  setAnalistas(analistas: Analista[]) {
    this.analistasChanged.next(analistas);
  }

  getAnalistas() {
    return this.httpClient.get('http://localhost:3001/analistas');
  }

  getAnalistaById(id: number) {
    return this.httpClient.get('http://localhost:3001/analistas/' + id);
  }

  create(analista: Analista) {
    return this.httpClient.post('http://localhost:3001/analistas', analista);
  }

  updateAnalista(analistaId: number, analista: Analista) {
    return this.httpClient.put(`http://localhost:3001/analistas/${analistaId}`, analista);
  }

  eliminacionLogica(analistaId: number) {
    return this.httpClient.put(`http://localhost:3001/analistas/${analistaId}/delete`, {});
  }

  activateAnalista(analistaId: number) {
    return this.httpClient.put(`http://localhost:3001/analistas/${analistaId}/activate`, {});
  }

  actualizaListaAnalistas() {
    this.getAnalistas().subscribe(
      (analistas: Analista[]) => {
        this.analistas = analistas;
      },
      (error) => {
        console.log(error)
      },
      () => {
        this.analistasChanged.next(this.analistas);
      }
    );
  }


}
