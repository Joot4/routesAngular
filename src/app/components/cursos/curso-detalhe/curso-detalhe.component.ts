import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from "rxjs";
import { CursosService } from '../../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent  implements OnInit, OnDestroy{

id:number = 0;
inscricao!:Subscription;
curso:any;

constructor(private route: ActivatedRoute,
  private router: Router,
  private cursoService: CursosService
  ){
}

ngOnInit(): void{
  this.inscricao = this.route.params.subscribe((params: any) =>{
  this.id = params['id']

  this.curso = this.cursoService.getCurso(this.id)
  if(this.curso === null){
    this.router.navigate(['notFound'])
  }
})
}

ngOnDestroy(): void{
this.inscricao.unsubscribe();
}

}
