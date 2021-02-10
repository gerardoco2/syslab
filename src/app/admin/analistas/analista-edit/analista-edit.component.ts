import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Analista } from './../../modelos/analista.model';
import { AnalistasService } from './../../servicios/analistas.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'analista-edit',
  templateUrl: './analista-edit.component.html',
  styleUrls: ['./analista-edit.component.css']
})
export class AnalistaEditComponent implements OnInit, OnDestroy {
  editMode = false;
  id: number;
  suscription: Subscription;
  analistaForm: FormGroup;
  analistas: Analista[];
  analista: Analista;

  constructor(private route: ActivatedRoute, private router: Router
    , private analistaService: AnalistasService) { }

  ngOnInit() {

    this.formInitializer();

    this.suscription = this.analistaService.analistaStartEdit.subscribe(
      (id: number) => {
        this.analistaService.getAnalistaById(id)
          .subscribe(
            (analista: Analista) => {
              this.analista = analista;
              this.editMode = true;
              this.analistaForm.setValue({
                nombre: this.analista.nombre,
                apellido: this.analista.apellido,
                email: this.analista.email,
                password: this.analista.password
              });
            }
          );
      }
    );

  }

  formInitializer() {
    this.analistaForm = new FormGroup({
      'nombre': new FormControl(null, Validators.required),
      'apellido': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required]),
    });
  }


  onSubmit() {

    if (this.analistaForm.valid) {
      const nombre = this.analistaForm.get('nombre').value;
      const apellido = this.analistaForm.get('apellido').value;
      const email = this.analistaForm.get('email').value;
      const pass = this.analistaForm.get('password').value;

      const newAnalista = new Analista(nombre, apellido, email, pass, 'activo');
      if (this.editMode) {
        this.analistaService.updateAnalista(this.analista.id, newAnalista)
          .subscribe(
            (response: Response) => {
              console.log(response);
              console.log("Analista actualizado");
              this.analistaService.actualizaListaAnalistas();
            },
            (error) => {
              console.log(error);
            }
          );
        this.onClear()
      } else {
        console.log("antes de envial el analista a la bd", newAnalista);

        this.analistaService.create(newAnalista).subscribe(() => {
          console.log(" analista creado");
          this.analistaService.actualizaListaAnalistas();
        });
      }
    }
    this.analistaForm.reset();
  }

  onDelete() {
    if (this.editMode) {

      this.analistaService.eliminacionLogica(this.analista.id).subscribe(
        () => {
          console.log("analista eliminado logicamente");
          this.analistaService.actualizaListaAnalistas();
        }
      );
      this.onClear();
    }
  }

  onActivate() {
    if (this.editMode) {
      this.analistaService.activateAnalista(this.analista.id)
        .subscribe(
          () => {
            console.log("Analista activado correctamente")
            this.analistaService.actualizaListaAnalistas();
          }
        );
      this.onClear()
    }
  }
  onClear() {
    this.analistaForm.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.suscription.unsubscribe();
  }
}
