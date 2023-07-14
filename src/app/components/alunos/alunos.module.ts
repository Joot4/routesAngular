import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosService } from './alunos.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AlunosFormComponent,
    AlunosComponent,
    AlunoDetalheComponent,
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    FormsModule,
  ],
  providers:[AlunosService],
})
export class AlunosModule { }
