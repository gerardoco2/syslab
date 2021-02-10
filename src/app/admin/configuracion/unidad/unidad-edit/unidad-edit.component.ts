import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UnidadService } from './../../../servicios/unidad.service';
import { Unidad } from './../../../modelos/unidad.model';
import { error } from 'protractor';
import { Console } from 'console';

@Component({
  selector: 'unidad-edit',
  templateUrl: './unidad-edit.component.html',
  styleUrls: ['./unidad-edit.component.css']
})
export class UnidadEditComponent implements OnInit {
  unidadesForm: FormGroup;
  unidadSelectedId: number;
  unidad: Unidad;
  editMode: boolean = false;

  constructor(private unidadesServ: UnidadService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.formInitializer();


    this.route.params.subscribe(
      (params: Params) => {
        this.unidadSelectedId = +params['id'];
        console.log("el id: ", this.unidadSelectedId);
        if (this.unidadSelectedId) {
          this.unidadesServ.getUnidadById(this.unidadSelectedId).subscribe(
            (unidad: Unidad) => {
              this.editMode = true;
              this.unidad = unidad;
              this.unidadesForm.setValue(
                {
                  nombre: this.unidad.nombre,
                  descripcion: this.unidad.descripcion
                }
              );
            }
          );
        }
      }
    );



  }

  formInitializer() {
    this.unidadesForm = new FormGroup({
      'nombre': new FormControl(null, Validators.required),
      'descripcion': new FormControl(null, Validators.required)
    });



  }

  onSubmit() {
    console.log(this.unidad);
    const nuevaUnidad = new Unidad(this.unidadesForm.get("nombre").value, this.unidadesForm.get("descripcion").value);

    if (this.editMode) {
      this.unidadesServ.updateUnidad(this.unidad.id, nuevaUnidad).subscribe(
        () => {
          console.log("actualizando la unidad");
          this.unidadesServ.unidadChanged.next(nuevaUnidad);
        },
        (error) => console.log(error),
        () => console.log("unidad actulaizada correctamente")
      );
    } else {
      this.unidadesServ.createUnidad(nuevaUnidad).subscribe(
        () => {
          console.log("creado nueva unidad");
          this.unidadesServ.unidadChanged.next(nuevaUnidad);
        },
        (error) => console.log(error),
        () => console.log("unidad creada correctamente")
      );
    }
    this.onCancel();
  }

  setFieldsByIdSelected(id: number) {
    this.unidadesForm.setValue
  }

  onCancel() {
    this.unidadesForm.reset();
    this.editMode = false;
    this.router.navigate(['admin/configuracion/unidades']);
  }

  onDelete(id: number) {
    this.unidadesServ.deleteUnidad(id).subscribe(
      () => {
        console.log("Unidad eliminada");
        this.unidadesServ.unidadChanged.next(this.unidad);
        this.unidad = null;

      }
    );
    this.onCancel();
  }
}
