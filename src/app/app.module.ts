import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { ModalModule, BsModalRef } from "ngx-bootstrap/modal";
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

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
import { UnidadListComponent } from './admin/configuracion/unidad/unidad-list/unidad-list.component';
import { ListaExamenesComponent } from './admin/configuracion/lista-examenes/lista-examenes.component';
import { ItemsComponent } from './admin/configuracion/items/items.component';
import { ItemsListComponent } from './admin/configuracion/items/items-list/items-list.component';
import { ItemsEditComponent } from './admin/configuracion/items/items-edit/items-edit.component';

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
    UnidadListComponent,
    ListaExamenesComponent,
    ItemsComponent,
    ItemsListComponent,
    ItemsEditComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [BsModalRef],
  bootstrap: [AppComponent],
  entryComponents: [PacienteEditComponent, SigninComponent],
})
export class AppModule { }
