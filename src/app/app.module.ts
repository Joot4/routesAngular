import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
//import { CursosComponent } from './components/cursos/cursos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CursosComponent } from './components/cursos/cursos.component';
import { CursosModule } from './components/cursos/cursos.module';
import { AlunosComponent } from './components/alunos/alunos.component';
import { AlunosModule } from './components/alunos/alunos.module';
import { AuthService } from './components/login/auth.service';
import { FormsModule } from '@angular/forms';

//import { CursosService } from './components/cursos.service';
//import { NotfoundcourseComponent } from './components/cursos/notfoundcourse/notfoundcourse.component';
//import { CursoDetalheComponent } from './components/cursos/curso-detalhe/curso-detalhe.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CursosModule,
    AlunosModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
