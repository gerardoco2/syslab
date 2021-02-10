import { Component, OnInit } from '@angular/core';
import { TipoExamenService } from '../../servicios/tipo-examen.service';
import { TipoExamen } from './../../modelos/tipo-examen.model';

@Component({
  selector: 'app-lista-examenes',
  templateUrl: './lista-examenes.component.html',
  styleUrls: ['./lista-examenes.component.css']
})
export class ListaExamenesComponent implements OnInit {
  tipoExamenes: TipoExamen[];

  constructor(private teService: TipoExamenService) { }

  ngOnInit() {
    this.updateTableElementes();
  }

  updateTableElementes() {
    this.teService.getTipoExamens().subscribe(
      (examenes: TipoExamen[]) => {
        this.tipoExamenes = examenes;
      }
    );
  }

  onDelete(id: number) {
    this.teService.deleteTipoExamen(id).subscribe(
      () => {
        console.log("tipo examen eliminado")
        this.updateTableElementes();
      }
    );

  }



}
