import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UnidadService } from 'src/app/admin/servicios/unidad.service';
import { Unidad } from './../../../modelos/unidad.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'unidad-list',
  templateUrl: './unidad-list.component.html',
  styleUrls: ['./unidad-list.component.css']
})
export class UnidadListComponent implements OnInit, OnDestroy {
  unidades: Unidad[];
  private subscription: Subscription;

  constructor(private unidadesServ: UnidadService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.actualizarUnidades();
    this.subscription = this.unidadesServ.unidadChanged
      .subscribe(
        () => {
          this.actualizarUnidades();
        }
      );
  }

  actualizarUnidades() {
    this.unidadesServ.getUnidades()
      .subscribe(
        (unidades: Unidad[]) => {
          this.unidades = unidades;
        }
      );
  }

  onSelected(id: number) {
    this.router.navigate(['admin/configuracion/unidades/', id]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
