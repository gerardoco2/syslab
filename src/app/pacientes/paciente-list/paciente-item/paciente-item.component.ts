import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/admin/modelos/paciente.model';
import { PacientesService } from './../../../admin/servicios/pacientes.service';

@Component({
  selector: 'app-paciente-item',
  templateUrl: './paciente-item.component.html',
  styleUrls: ['./paciente-item.component.css']
})
export class PacienteItemComponent implements OnInit {
  pacientes: Paciente[] = [];

  constructor(private pacientesService: PacientesService) { }

  ngOnInit() {

  }

}
