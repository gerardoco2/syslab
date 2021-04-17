import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private modalService: BsModalService,
    private servPacientes: PacientesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.updatePacientesList();
  }

  updatePacientesList() {
    this.servPacientes.getPacientes()
      .subscribe(
        (pacientes: Paciente[]) => {
          this.pacientes = pacientes;
        }
      );
  }

  onPactientSelected(ced: string) {
    //this.servPacientes.patientSelected.next(id);

    this.router.navigate([ced], { relativeTo: this.route });
  }
  //pacientId se refiere a la cedula
  openPacienteEdit(patientId: string) {

    //this.servPacientes.pacienteStarEdit.next(patientId);
    this.router.navigate([patientId, 'edit'], { relativeTo: this.route });
    //this.pacienteEditModal = this.modalService.show(PacienteEditComponent);
    //this.pacienteEditModal.content.closeBtnName = 'Close';
  }
}
