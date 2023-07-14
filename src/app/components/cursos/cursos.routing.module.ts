import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { NotfoundcourseComponent } from './notfoundcourse/notfoundcourse.component';
import { guardsAuth } from '../guards/Auth.guard';


const cursosRoutes: Routes = [
  { path:'cursos', component:CursosComponent, },
  { path:'cursos/:id', component:CursoDetalheComponent, },
  { path:'notFound', component:NotfoundcourseComponent, },
];

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule]
})
export class Cursos { }
