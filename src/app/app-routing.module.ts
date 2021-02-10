import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MainComponent } from "./admin/main/main.component";
import { AdminComponent } from "./admin/admin.component";
import { PacientesComponent } from "./pacientes/pacientes.component";
import { PacienteEditComponent } from './pacientes/paciente-edit/paciente-edit.component';
import { AnalistasComponent } from './admin/analistas/analistas.component';
import { UnidadComponent } from './admin/configuracion/unidad/unidad.component';
import { ConfiguracionComponent } from './admin/configuracion/configuracion.component';
import { TipoExamenComponent } from './admin/configuracion/tipo-examen/tipo-examen.component';
import { AnalistaEditComponent } from './admin/analistas/analista-edit/analista-edit.component';
import { PacienteDetailComponent } from './pacientes/paciente-detail/paciente-detail.component';
import { UnidadListComponent } from './admin/configuracion/unidad/unidad-list/unidad-list.component';
import { UnidadEditComponent } from './admin/configuracion/unidad/unidad-edit/unidad-edit.component';
import { ListaExamenesComponent } from './admin/configuracion/lista-examenes/lista-examenes.component';
import { ItemsComponent } from './admin/configuracion/items/items.component';


const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  {
    path: "admin", component: AdminComponent,
    children: [
      {
        path: "pacientes", component: PacientesComponent, children: [
          { path: ':id', component: PacienteDetailComponent },
          { path: ':id/edit', component: PacienteEditComponent }

        ],
      },
      {
        path: "analistas", component: AnalistasComponent, children:
          [
            { path: ":id", component: AnalistasComponent }
          ]
      },

      {
        path: 'configuracion', component: ConfiguracionComponent, children: [
          {
            path: "unidades", component: UnidadComponent, children: [
              { path: "", component: UnidadEditComponent },
              { path: ":id", component: UnidadEditComponent }
            ]
          },
          {
            path: "tipoExamen", component: TipoExamenComponent
          },
          {
            path: "lista-examenes", component: ListaExamenesComponent
          },
          {
            path: "pruebas", component: ItemsComponent, children: [
              {
                path: "", component: ItemsComponent
              }
            ]
          },

        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
