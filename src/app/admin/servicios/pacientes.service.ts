
import { Paciente } from '../modelos/paciente.model';


export class PacientesService {
  private pacientes: Paciente[] = [
    new Paciente('123', 'Gerardo from array', 'colina', new Date("2019-01-16"), 'gerardocolina@gmail.com', '4129685822'),
    new Paciente('456', 'pasiente from array', 'colina', new Date("2019-01-16"), 'gerardocolina@gmail.com', '4129685822'),
  ];

  constructor() { }

  getPacientes() {

    return this.pacientes.slice();
  }
}
