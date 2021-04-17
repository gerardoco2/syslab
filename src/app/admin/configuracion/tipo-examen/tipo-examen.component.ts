import { Component, OnInit } from '@angular/core';
import { UnidadService } from 'src/app/admin/servicios/unidad.service';
import { Unidad } from './../../modelos/unidad.model';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder, Form } from '@angular/forms';
import { TipoExamen } from './../../modelos/tipo-examen.model';
import { TipoExamenService } from './../../servicios/tipo-examen.service';
import { Item } from '../../modelos/item.model';
import { ItemsService } from '../../servicios/items.service';

@Component({
  selector: 'app-tipo-examen',
  templateUrl: './tipo-examen.component.html',
  styleUrls: ['./tipo-examen.component.css']
})
export class TipoExamenComponent implements OnInit {
  unidades: Unidad[];
  tipoExForm: FormGroup;

  constructor(private unidadService: UnidadService,
    private tpService: TipoExamenService, private itemService: ItemsService,
    private fb: FormBuilder) { }

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
      "codigo": new FormControl('', Validators.required),
      "nombre": new FormControl('', Validators.required),
      'descripcion': new FormControl('', Validators.required),
      'items': new FormArray([])
    });
  }

  onCancel() {
    this.tipoExForm.reset();
  }

  onSubmit() {
    console.log(this.tipoExForm.value);
    const codigo = this.tipoExForm.get('codigo').value;
    const nombre = this.tipoExForm.get('nombre').value;
    const descripcion = this.tipoExForm.get('descripcion').value;
    const nuevoTipEx = new TipoExamen(codigo, nombre, descripcion);
    const items = this.tipoExForm.get("items").value;

    this.tpService.createTipoExamen(nuevoTipEx).subscribe(
      () => {
        console.log("tipo examen creado con exito!");
        for (let item of items) {
          let nuevoItem = new Item(item.nombreItem, item.descripcionItem, item.valorIniItem, item.valorFinalItem, item.unidadSelected, codigo);
          console.log("EL ITEM a insertar", nuevoItem);
          this.itemService.createItem(nuevoItem).subscribe(
            () => console.log("item creado con exito"),
            (error) => console.log("no se creo el item ", error),
            () => console.log("COMPLETE item creado con exito!"),
          );
        }
      },
      (error) => console.log("no se creo el tipo ex: ", error),
      () => console.log("COMPLETE tipo examen creado con exito!"),
    );

    this.onCancel();
    let itemsArr = (<FormArray>this.tipoExForm.get('items'));
    this.clearFormArray(itemsArr);
  }

  clearFormArray(fA: FormArray) {
    while (fA.length !== 0) {
      fA.removeAt(0)
    }
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
    (<FormArray>this.tipoExForm.get('items')).removeAt(i);
  }

}
