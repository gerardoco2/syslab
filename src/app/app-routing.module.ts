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

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  {
    path: "admin", component: AdminComponent,
    children: [
      {
        path: "pacientes", component: PacientesComponent, children: [
          { path: ':id', component: PacienteEditComponent },
          { path: 'edit', component: PacienteEditComponent }
        ],
      },
      {
        path: "analistas", component: AnalistasComponent
      },

      {
        path: 'configuracion', component: ConfiguracionComponent, children: [
          {
            path: "unidades", component: UnidadComponent
          },
          {
            path: "tipoExamen", component: TipoExamenComponent
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
