import { Component, OnInit } from '@angular/core';
import { AuthService } from './components/login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'routesTraining';

  mostrarMenu:boolean = false

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.authService.showMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    )
  }

}
