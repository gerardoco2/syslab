import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-paciente-edit',
  templateUrl: './paciente-edit.component.html',
  styleUrls: ['./paciente-edit.component.css']
})
export class PacienteEditComponent implements OnInit {
  modal: BsModalRef;

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  close() {
    this.bsModalRef.hide();
  }
}
