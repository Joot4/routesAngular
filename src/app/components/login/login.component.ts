import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Login } from '../login';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

 usuario:Login;

  constructor(private authService:AuthService){
    this.usuario = {
      name:'',
      password:''
    }
  }

  Login(){
    this.authService.doLogin(this.usuario);
  }

}
