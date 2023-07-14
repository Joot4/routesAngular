import { Component, OnDestroy, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

 cursos: any[] = [];
 pagina:number = 0;
 inscricao!:Subscription;


  constructor(private cursoservice:CursosService,
    private route: ActivatedRoute,
    private router: Router,
    ){

  }

ngOnInit(): void {
  this.cursos = this.cursoservice.getCursos();
  this.route.queryParams.subscribe(
    (queryParams:any) =>{
      this.pagina = queryParams['pagina']
    }
    );
}

// ngOnDestroy():void {
//   this.inscricao.unsubscribe();
//   }

  incrementPage(){
    this.pagina++
    this.router.navigate(['/cursos'],
    {queryParams: {'pagina': + this.pagina}});
  }

}
