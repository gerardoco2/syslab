import { Component, OnDestroy, OnInit } from '@angular/core';
import { Paciente } from 'src/app/admin/modelos/paciente.model';
import { PacientesService } from './../../admin/servicios/pacientes.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { PacienteEditComponent } from '../paciente-edit/paciente-edit.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-paciente-detail',
  templateUrl: './paciente-detail.component.html',
  styleUrls: ['./paciente-detail.component.css']
})
export class PacienteDetailComponent implements OnInit, OnDestroy {
  paciente: Paciente;
  ced: string;
  subscription: Subscription;
  pacienteEditModal: BsModalRef;

  constructor(private modalService: BsModalService,
    private pacienteServ: PacientesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.ced = params['id'];
        this.pacienteServ.getPacienteByCedula(this.ced).subscribe(
          (paciente: Paciente) => {
            this.paciente = paciente;
          }
        );
      }
    );
  }

  onEdit() {
    this.pacienteEditModal = this.modalService.show(PacienteEditComponent);
  }
  ngOnDestroy() {
    //this.subscription.unsubscribe();
  }
}
