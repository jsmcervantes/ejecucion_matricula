import { Component } from '@angular/core';
import { AsistenciaPersonaService } from '../asistencia-persona.service';

@Component({
  selector: 'app-listadofecha',
  templateUrl: './listadofecha.component.html'
})
export class ListadofechaComponent {
  constructor(
    private asistenciaPersonaService: AsistenciaPersonaService,){}
}

/* persona: Persona[] = [];

ngOnInit() {
  this.findAll();
}

findAll() {
  this.asistenciaPersonaService.getInscriptions().subscribe((res) => {
    this.nombres = res;
    this.nombres.forEach((nombres) => {
      this.asistenciaPersonaService
        .getPerson(nota.estudianteId)
        .subscribe((res) => {
          nota.estudiante = res;
          nota.nombreEstudiante = res.nombres;
          console.log(this.notas);
        });
    });
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }); */