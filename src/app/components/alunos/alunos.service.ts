import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

private alunos:any[] = [
  {id: 1, nome: 'Junior', email:'jrtatay@hotmail.com'},
  {id: 2, nome: 'Luna', email:'luna02@hotmail.com'},
  {id: 3, nome: 'Rafael', email:'rafael03@hotmail.com'}
]

getAll(){
return this.alunos;
}

getAluno(id:number){
  for (let i = 0; i < this.alunos.length; i++) {
    let aluno = this.alunos[i];
    if(aluno.id == id){
      return aluno;
    }
  }
  return null;


}
  constructor() { }
}
