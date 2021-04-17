import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Paciente } from '../admin/modelos/paciente.model';
import { PacientesService } from '../admin/servicios/pacientes.service';
import { PacienteEditComponent } from './paciente-edit/paciente-edit.component';


@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  pacientes: Paciente[];
  patientPasadoAlModal: Paciente;
  activateAddEditPac: boolean = false;
  tituloModal: string;
  pacienteEditModal: BsModalRef;
  agregar: boolean = false;

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
    console.log("soy yo el que voy");
    this.router.navigate(['admin/pacientes/', ced]);
  }

  openPacienteEdit(pacienteId: number) {
    this.servPacientes.patientSelected.next(pacienteId);
    this.servPacientes.pacienteStarEdit.next(pacienteId);
    this.activateAddEditPac = true;

    //this.router.navigate([patientId, 'edit'], { relativeTo: this.route });
    //this.pacienteEditModal = this.modalService.show(PacienteEditComponent);
    //this.pacienteEditModal.content.closeBtnName = 'Close';
  }
  onNavigate(id: number) {

    this.router.navigate([id, 'edit'], { relativeTo: this.route });
  }

  addPaciente() {
    this.activateAddEditPac = true;
    this.agregar = true;
    this.tituloModal = "Registrar Nuevo Paciente";
    this.patientPasadoAlModal = null;
    //this.patientPasadoAlModal = new Paciente(0, '', '', '', '', '', '');
  }

  onEdit(pacienteX: Paciente) {
    this.tituloModal = "Edita Informacion Del Paciente";
    this.patientPasadoAlModal = pacienteX;
    this.activateAddEditPac = true;
  }

  onClose() {
    this.activateAddEditPac = false;
    this.agregar = false;
    this.updatePacientesList();
  }
}
