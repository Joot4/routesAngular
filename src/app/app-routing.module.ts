import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateFn } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { guardsAuth } from './components/guards/Auth.guard';




// import { CursosComponent } from './components/cursos/cursos.component';
// import { CursoDetalheComponent } from './components/cursos/curso-detalhe/curso-detalhe.component';
// import { NotfoundcourseComponent } from './components/cursos/notfoundcourse/notfoundcourse.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    canActivate:[guardsAuth]

  },
  {
    path:'login',
    component:LoginComponent,

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
