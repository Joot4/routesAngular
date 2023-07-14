import { EventEmitter, Injectable } from '@angular/core';
import { Login } from '../login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAuthentic:boolean = false

  showMenuEmitter = new EventEmitter<boolean>();

  constructor(private router:Router) { }



  doLogin(usuario:Login){
    if(usuario.name === 'usuario@email.com' && usuario.password === '123456' ){
      this.usuarioAuthentic = true;

      this.showMenuEmitter.emit(true);

      this.router.navigate(['/']);

    } else{
      this.usuarioAuthentic = false;
      this.showMenuEmitter.emit(false);
      this.router.navigate(['/login'])
    }
  }

  usuarioAuth(){
    return this.usuarioAuthentic;
  }
}
