import { Component, OnInit } from '@angular/core';
import { Unidad } from 'src/app/admin/modelos/unidad.model';
import { UnidadService } from 'src/app/admin/servicios/unidad.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ItemsService } from 'src/app/admin/servicios/items.service';
import { Item } from 'src/app/admin/modelos/item.model';



@Component({
  selector: 'items-edit',
  templateUrl: './items-edit.component.html',
  styleUrls: ['./items-edit.component.css']
})
export class ItemsEditComponent implements OnInit {
  unidades: Unidad[];
  form: FormGroup;

  constructor(private unidadesServ: UnidadService, private itemsServ: ItemsService) { }

  ngOnInit() {
    this.initializeForm();
    this.cargarUnidades();
  }

  initializeForm() {
    this.form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      valorIni: new FormControl('', Validators.required),
      valorFinal: new FormControl('', Validators.required),
      unidadId: new FormControl('', Validators.required)
    });
  }

  cargarUnidades() {
    this.unidadesServ.getUnidades().subscribe(
      (unidades: Unidad[]) => {
        this.unidades = unidades;
      }
    );
  }

  onSubmit() {
    console.log(this.form.value);
    const nombre = this.form.get('nombre').value;
    const descripcion = this.form.get('descripcion').value;
    const valorIni = this.form.get('valorIni').value;
    const valorFinal = this.form.get('valorFinal').value;
    const unidadId = this.form.get('unidadId').value;

    const nuevoItem = new Item(nombre, descripcion, valorIni, valorFinal, unidadId);
    this.itemsServ.createItem(nuevoItem).subscribe(
      () => console.log("item creado")
    );

    this.onCancel();
  }

  onCancel() {
    this.form.reset();
  }

}
