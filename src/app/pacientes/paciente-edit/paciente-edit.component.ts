import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PacientesService } from './../../admin/servicios/pacientes.service';
import { Paciente } from 'src/app/admin/modelos/paciente.model';
import { compileBaseDefFromMetadata, CompileTemplateMetadata } from '@angular/compiler';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-paciente-edit',
  templateUrl: './paciente-edit.component.html',
  styleUrls: ['./paciente-edit.component.css']
})
export class PacienteEditComponent implements OnInit {
  modal: BsModalRef;
  patientId: string;
  editMode = false;
  patientForm: FormGroup;
  paciente: Paciente;



  constructor(private bsModalRef: BsModalRef,
    private pacientesServ: PacientesService,
    private route: ActivatedRoute) { }

  @Input() pac: Paciente;
  @Input() add: boolean;

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.patientId = params['id'];
          console.log("este es el id que quiero ", this.patientId);
        }
      );
    this.paciente = this.pac;
    this.formInitializer();



    if (this.paciente) {

      this.patientForm.setValue({
        cedula: this.paciente.cedula,
        nombre: this.paciente.nombre,
        apellido: this.paciente.apellido,
        fecha_nac: this.paciente.fecha_nac,
        email: this.paciente.email,
        telefono: this.paciente.telefono
      });
    }


    /*   this.pacientesServ.patientSelected.subscribe(
        (id: number) => {
          this.patientId = id;
        }
      ); */
    /*   console.log("oninit called");
  
      
      this.pacientesServ.pacienteStarEdit.subscribe(
  
        (id: number) => {
          console.log("el id es : ", id);
          if (id !== 0) {
            this.pacientesServ.getPacienteById(id).subscribe(
              (paciente: Paciente) => {
                this.paciente = paciente;
                console.log(paciente);
                this.editMode = true;
                this.patientForm.setValue({
                  cedula: this.paciente.cedula,
                  nombre: this.paciente.nombre,
                  apellido: this.paciente.apellido,
                  fecha_nac: this.paciente.fecha_nac,
                  email: this.paciente.email,
                  telefono: this.paciente.telefono
                });
              }
            );
          }
        },
        (err) => {
          console.log(err);
        },
        () => {
          console.log("complete")
        }
      ); */

  }

  formInitializer() {
    this.patientForm = new FormGroup({
      'cedula': new FormControl(null, Validators.required),
      'nombre': new FormControl(null, Validators.required),
      'apellido': new FormControl(null, Validators.required),
      'fecha_nac': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required]),
      'telefono': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    console.log(this.patientForm.value);
    const ced = this.patientForm.get('cedula').value;
    const nom = this.patientForm.get('nombre').value;
    const ap = this.patientForm.get('apellido').value;
    const fecha = this.patientForm.get('fecha_nac').value;
    const email = this.patientForm.get('email').value;
    const telf = this.patientForm.get('telefono').value;

    const nuevoPaciente = new Paciente(ced, nom, ap, fecha, email, telf);
    if (!this.add) {
      this.pacientesServ.updatePaciente(this.paciente.cedula, nuevoPaciente).subscribe(
        () => {
          console.log("paciente actualizado");
        });
    } else {
      this.pacientesServ.create(nuevoPaciente).subscribe();
    }
    this.patientForm.reset();
    this.paciente = null;
    this.close();
  }

  close() {
    this.bsModalRef.hide();
  }


}
