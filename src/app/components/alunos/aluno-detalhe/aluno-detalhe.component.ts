import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})
export class AlunoDetalheComponent implements OnInit{

  aluno: any = '';
  inscricao!:Subscription;

  constructor(private route: ActivatedRoute,
    private alunosService: AlunosService,
    private router: Router,
    ){
  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params:any) =>{
        let id = params['id'];
        this.aluno = this.alunosService.getAluno(id)
      }
    )
  }

  directAluno(){
this.router.navigate(['/alunos', this.aluno.id, 'editar'])
  }





}
