import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Analista } from './../../modelos/analista.model';
import { AnalistasService } from './../../servicios/analistas.service';

@Component({
  selector: 'analista-edit',
  templateUrl: './analista-edit.component.html',
  styleUrls: ['./analista-edit.component.css']
})
export class AnalistaEditComponent implements OnInit {

  analistaForm: FormGroup;


  constructor(private analistaService: AnalistasService) { }

  ngOnInit() {
    this.analistaForm = new FormGroup({
      'nombre': new FormControl(null, Validators.required),
      'apellido': new FormControl(null),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null),
    });
  }

  onSubmit() {
    const nombre = this.analistaForm.get('nombre').value;
    const apellido = this.analistaForm.get('apellido').value;
    const email = this.analistaForm.get('email').value;
    const pass = this.analistaForm.get('password').value;

    const analista = new Analista(1, nombre, apellido, email, pass, 'activo');

    this.analistaService.addAnalista(analista);
  }
}
