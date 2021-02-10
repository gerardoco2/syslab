import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Analista } from './../modelos/analista.model';
import { AnalistasService } from './../servicios/analistas.service';


@Component({
  selector: 'app-analistas',
  templateUrl: './analistas.component.html',
  styleUrls: ['./analistas.component.css']
})
export class AnalistasComponent implements OnInit, OnDestroy {
  analistas: Analista[];
  private subscription: Subscription;

  constructor(private analistasService: AnalistasService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.analistasService.getAnalistas().subscribe(
      (analistas: Analista[]) => {
        this.analistas = analistas;
        console.log(this.analistas);
      }
    );
    this.subscription = this.analistasService.analistasChanged.subscribe(
      (analistas: Analista[]) => {
        this.analistas = analistas;
        console.log("tabla actualizada");
      }
    );
  }

  onSelected(id: number) {
    this.router.navigate([id], { relativeTo: this.route });
    this.analistasService.analistaStartEdit.next(id);

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
