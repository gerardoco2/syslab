import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Item } from '../modelos/item.model';
import { TipoExamenService } from '../servicios/tipo-examen.service';
import { TipoExamen } from './../modelos/tipo-examen.model';
import { ResultadoComponent } from './resultado/resultado.component';
import { ResultadosService } from './../servicios/resultados.service';
import { Subscription } from 'rxjs';
import { ExamenesService } from '../servicios/examenes.service';
import { Examen } from '../modelos/examen.model';
import { Paciente } from './../modelos/paciente.model';



@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit, OnDestroy {

  //examenForm: FormGroup;
  tExamens: TipoExamen[];
  selectedNav: string;
  items: Item[] = [];
  examenes: Examen[];

  public examenForm: FormGroup;
  resultados: FormArray;

  private subscription: Subscription;

  constructor(private tExamenService: TipoExamenService,
    private fb: FormBuilder, private resultadosService: ResultadosService,
    private examenService: ExamenesService) { }

  ngOnInit() {
    this.cargarTipoExamens();
    this.formInitializer();
    /* this.subscription = this.examenService.examenesChanged.subscribe(
       (examenes: Examen[]) => {
         this.examenes = examenes;
       }
     );*/
    //this.generateExamenForm();

  }

  formInitializer() {
    /* this.examenForm = this.fb.group({
       'cedula': [''],
       'nombre': [''],
       'apellido': [''],
       'fecha-nac': [''],
       'email': [''],
       'tel': [''],
       'resultados': this.fb.group({
         valor: ['']
       }),
     });
     */
    this.examenForm = this.fb.group({
      'cedula': [''],
      'nombre': [''],
      'apellido': [''],
      'fechaNac': [''],
      'email': [''],
      'tel': [''],
      'resultados': this.fb.array([

      ]),
    });

  }
  createResultadoItem(): FormGroup {
    return this.fb.group({
      valor: ''
    });
  }

  addResultadoItem(): void {
    this.resultados = this.examenForm.get('resultados') as FormArray;
    this.resultados.push(this.fb.group({
      valor: ''
    }));
  }

  public generateExamenForm() {
    this.examenForm = new FormGroup({
      cedula: new FormControl(''),
      nombre: new FormControl(''),
      apellido: new FormControl(''),
      fechaNac: new FormControl(''),
      email: new FormControl(''),
      tel: new FormControl(''),
      resultados: new FormArray([
        //ResultadoComponent.addResultForm()
        new FormGroup({
          valor: new FormControl('')
        })

      ]),

    });
  }

  onSubmit() {
    // tengo el arreglo items de donde puedo
    // sacar el codigo para asociarlo a cada resultado de cada examen

    //let codigoItems = ...this.items
    console.log(this.examenForm.value);

    const ced = this.examenForm.get('cedula').value;
    const nom = this.examenForm.get('nombre').value;
    const apellido = this.examenForm.get('apellido').value;
    const fechaNac = this.examenForm.get('fechaNac').value;
    const email = this.examenForm.get('email').value;
    const tel = this.examenForm.get('tel').value;

    console.log(ced);
    // crear paciente

    //let paciente = new Paciente();


    //this.resultadosService.createResultado();
  }

  armadoDelMetodoSubmit() {
    //crear un examen
    const ced = this.examenForm.get('cedula').value;
    let fecha = new Date();
    const dia = fecha.getDate();
    const mes = fecha.getUTCMonth() + 1;
    const anno = fecha.getUTCFullYear();
    const hora = fecha.getHours();
    const mins = fecha.getMinutes();
    const secs = fecha.getSeconds();
    const codigo = `${ced}_${dia}${mes.toString()}${anno}${hora}${mins}${secs}`;


    const examen = new Examen(codigo, 1, 1, fecha);
    this.examenService.createExamen(examen).subscribe(
      () => {
        console.log("examen creado");
        this.examenService.actualizarListaExamenes();
      }
    );

  }

  cargarTipoExamens() {
    this.tExamenService.getTipoExamens().subscribe(
      (tExamens: TipoExamen[]) => {
        this.tExamens = tExamens;
      }
    );
  }

  cargarItemsPorExamenSeleccionado(seleccionId: string) {
    this.tExamenService.itemsByTipoExamen(seleccionId).subscribe(
      (items: Item[]) => {
        this.items = items;
        console.log("items cargados", items)
      },
      err => console.log(err),
      () => {
        this.limpiarFormArray();
        for (let i = 0; i < this.items.length; i++) {
          this.addResultadoItem();
        }
      }

    );
  }

  onOptionsSelected(value: string) {
    console.log("ejecutando metodo change");
    this.cargarItemsPorExamenSeleccionado(value);



  }

  limpiarFormArray(): void {
    /* this.resultados = <FormArray>this.examenForm.get('resultados');
     for (let i = 0; i <= this.resultados.length; i++) {
       this.resultados.removeAt(i);
 
     }*/
    this.resultados = <FormArray>this.examenForm.get('resultados');
    this.resultados.clear();
    console.log(this.resultados.length);
  }

  ngOnDestroy() {
    /*this.selectedNav = "";
    this.items = [];
    this.subscription.unsubscribe();*/
  }
}
