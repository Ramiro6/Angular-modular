import { Injectable } from '@angular/core';
import { Usuario } from '../../model/usuario.model';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';


@Injectable()
export class UsuarioService {
  private environment =  environment.url;
  private token: any;

  constructor( public http: Http,
               public router: Router ) {
    this.cargarStorage();
  }


  login( usuario: Usuario, recordar: boolean ) {
    let url = this.environment + '/login';

    if ( recordar ) {
      localStorage.setItem('email', usuario.email);
    } else {
      localStorage.removeItem('email');
    }

    return this.http.post(url, usuario)
               .map((res: any) => {
                // localStorage.setItem('token', res.json().userToken);
                // this.token = localStorage.getItem('token');
                // console.log('el token', this.token);
                // this.router.navigate(['/dashboard']);
                if ( !res.json().userToken) {
                  return false;
                } else {
                  localStorage.setItem('token', res.json().userToken);
                  this.token = localStorage.getItem('token');
                  return res.json().userToken;
                }
               });
  }

  logout() {
    this.token = null;

    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  crearUsuario( usuario: Usuario ) {
    let url = this.environment;

    return this.http.post(url, usuario)
               .map((res: any) => {
                 return res.json();
               });
  }
  estaLogeado() {
    return (this.token.length > 5 ) ? true : false;
  }


  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
    } else {
      this.token = '';
    }
  }

}
