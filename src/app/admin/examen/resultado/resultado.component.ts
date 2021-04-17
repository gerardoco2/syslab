import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Item } from '../../modelos/item.model';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {

  @Input()
  public resultadoForm: FormGroup;

  @Input()
  public item: Item;

  constructor() { }

  static addResultForm(): FormGroup {
    return new FormGroup({
      valor: new FormControl('')
    });
  }

}
