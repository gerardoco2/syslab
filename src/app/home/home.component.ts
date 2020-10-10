import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SigninComponent } from './../modals/signin/signin.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }
  onSignIn() {
    this.bsModalRef = this.modalService.show(SigninComponent);
    this.bsModalRef.content.closeBtnName = 'close';
  }
}
