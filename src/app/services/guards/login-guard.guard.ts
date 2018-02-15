import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginGuardGuard implements CanActivate {

  constructor( public _userApi: UsuarioService,
               public router: Router ) {
                  // this.router.navigate(['/login']);
  }

  canActivate() {
    if ( this._userApi.estaLogeado() ) {
      console.log('paso el guard');
      return true;
    } else {
      console.log('bloqueado por el guard');
      return false;
    }
  }
}
