import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../login/auth.service';


export const guardsAuth: CanActivateFn = (route, state) => {
  const router = new Router;
  if(!inject(AuthService).usuarioAuth()){
    router.navigate(['/login'])
     return false
  } else {
    return true
  }

};


