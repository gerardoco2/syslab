import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ModalModule, BsModalRef } from "ngx-bootstrap/modal";


import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AdminComponent } from "./admin/admin.component";
import { NavbarComponent } from "./admin/navbar/navbar.component";
import { SidebarComponent } from "./admin/sidebar/sidebar.component";
import { MainComponent } from "./admin/main/main.component";
import { PacientesComponent } from "./pacientes/pacientes.component";
import { PacienteListComponent } from './pacientes/paciente-list/paciente-list.component';
import { PacienteEditComponent } from './pacientes/paciente-edit/paciente-edit.component';
import { PacienteDetailComponent } from './pacientes/paciente-detail/paciente-detail.component';
import { PacienteItemComponent } from './pacientes/paciente-list/paciente-item/paciente-item.component';
import { AnalistasComponent } from './admin/analistas/analistas.component';
import { AnalistaEditComponent } from './admin/analistas/analista-edit/analista-edit.component';
import { SigninComponent } from './modals/signin/signin.component';
import { UnidadComponent } from './admin/configuracion/unidad/unidad.component';
import { PacientesService } from './admin/servicios/pacientes.service';
import { ConfiguracionComponent } from './admin/configuracion/configuracion.component';
import { TipoExamenComponent } from './admin/configuracion/tipo-examen/tipo-examen.component';
import { UnidadEditComponent } from './admin/configuracion/unidad/unidad-edit/unidad-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    NavbarComponent,
    SidebarComponent,
    MainComponent,
    PacientesComponent,
    PacienteListComponent,
    PacienteEditComponent,
    PacienteDetailComponent,
    PacienteItemComponent,
    AnalistasComponent,
    AnalistaEditComponent,
    SigninComponent,
    UnidadComponent,
    ConfiguracionComponent,
    TipoExamenComponent,
    UnidadEditComponent,
  ],
  imports: [BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [BsModalRef, PacientesService],
  bootstrap: [AppComponent],
  entryComponents: [PacienteEditComponent, SigninComponent],
})
export class AppModule { }
