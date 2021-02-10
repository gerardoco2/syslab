import { Component, OnInit } from '@angular/core';
import { Unidad } from '../../modelos/unidad.model';
import { UnidadService } from './../../servicios/unidad.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-unidad',
  templateUrl: './unidad.component.html',
  styleUrls: ['./unidad.component.css']
})
export class UnidadComponent implements OnInit {



  constructor() { }

  ngOnInit() {

  }

}
