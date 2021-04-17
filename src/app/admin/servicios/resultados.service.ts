import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resultado } from '../modelos/resultado.model';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ResultadosService {
  resultados: Resultado[];
  resultadoChanged = new Subject<Resultado[]>();

  constructor(private httpClient: HttpClient) { }


  getResultados() {
    return this.httpClient.get('http://localhost:3001/resultados');
  }

  getResultadoById(id: number) {
    return this.httpClient.get('http://localhost:3001/resultados/' + id);
  }

  createResultado(resultado: Resultado) {
    return this.httpClient.post('http://localhost:3001/resultados', resultado)
  }

  updateResultado(id: number, resultado: Resultado) {
    return this.httpClient.put(`http://localhost:3001/analistas/${id}`, resultado);
  }
  actualizaListaResultados() {
    this.getResultados().subscribe(
      (resultados: Resultado[]) => {
        this.resultados = resultados;
      },
      (error) => {
        console.log(error)
      },
      () => {
        this.resultadoChanged.next(this.resultados);
      }
    );
  }
}
