import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'
import { Paciente } from 'src/app/admin/modelos/paciente.model';
import { PacienteEditComponent } from '../paciente-edit/paciente-edit.component';
import { PacientesService } from './../../admin/servicios/pacientes.service';



@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css']
})
export class PacienteListComponent implements OnInit {

  pacientes: Paciente[];

  pacienteEditModal: BsModalRef;

  constructor(private modalService: BsModalService, private servPacientes: PacientesService) { }

  ngOnInit() {
    this.pacientes = this.servPacientes.getPacientes();
    console.log(this.pacientes);
  }

  openPacienteEdit() {
    const initialState = {} //pasar el objeto
    this.pacienteEditModal = this.modalService.show(PacienteEditComponent);
    //this.pacienteEditModal.content.closeBtnName = 'Close';
  }
}
