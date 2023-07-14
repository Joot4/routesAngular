import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { NotfoundcourseComponent } from './notfoundcourse/notfoundcourse.component';
import { CursosService } from '../cursos.service';
import { Cursos } from './cursos.routing.module';
import { guardsAuth } from '../guards/Auth.guard';




@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    NotfoundcourseComponent,
  ],
  imports: [
    CommonModule,
    Cursos,
  ],
  providers:[CursosService]
})
export class CursosModule { }
