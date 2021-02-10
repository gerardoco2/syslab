import { Component, OnInit } from '@angular/core';
import { UnidadService } from 'src/app/admin/servicios/unidad.service';
import { Unidad } from './../../modelos/unidad.model';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { TipoExamen } from './../../modelos/tipo-examen.model';
import { TipoExamenService } from './../../servicios/tipo-examen.service';

@Component({
  selector: 'app-tipo-examen',
  templateUrl: './tipo-examen.component.html',
  styleUrls: ['./tipo-examen.component.css']
})
export class TipoExamenComponent implements OnInit {
  unidades: Unidad[];
  tipoExForm: FormGroup;

  constructor(private unidadService: UnidadService, private tpService: TipoExamenService, private fb: FormBuilder) { }

  ngOnInit() {
    this.formInit();

    this.unidadService.getUnidades().subscribe(
      (unidades: Unidad[]) => {
        this.unidades = unidades;
      }
    );
  }

  formInit() {
    this.tipoExForm = new FormGroup({
      "nombre": new FormControl('', Validators.required),
      'descripcion': new FormControl('', Validators.required),
      /*'nombre-item': new FormControl('', Validators.required),
      'descripcion-item': new FormControl('', Validators.required),
      'valorIni-item': new FormControl('', Validators.required),
      'valorFinal-item': new FormControl('', Validators.required),
      'unidadSelected': new FormControl('', Validators.required),*/
      'items': new FormArray([])
    });
  }

  onCancel() {
    this.tipoExForm.reset();
  }

  onSubmit() {
    console.log(this.tipoExForm.value);
    /*const nombre = this.tipoExForm.get('nombre').value;
    const descripcion = this.tipoExForm.get('descripcion').value;
    const nuevoTipEx = new TipoExamen(nombre, descripcion);

    this.tpService.createTipoExamen(nuevoTipEx).subscribe(
      () => console.log("tipo examen creado con exito!"),
      (error) => console.log("no se creo el tipo ex: ", error),
      () => console.log("COMPLETE tipo examen creado con exito!"),
    );*/

    this.onCancel();
  }

  newItem(): FormGroup {
    return this.fb.group({
      nombreItem: '',
      descripcionItem: '',
      valorIniItem: '',
      valorFinalItem: '',
      unidadSelected: ''
    })
  }
  onAddItem() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.tipoExForm.get('items')).push(this.newItem());
  }

  removeItem(i: number) {
    //(<FormArray>this.tipoExForm.get('items').remo)
  }

}
