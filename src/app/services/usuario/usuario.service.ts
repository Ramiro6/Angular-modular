import { Injectable } from '@angular/core';
import { Usuario } from '../../model/usuario.model';
import { Http, Response, ResponseContentType, RequestOptions, Headers } from '@angular/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { SubirArchivosService } from '../subir-archivos/subir-archivos.service';


@Injectable()
export class UsuarioService {
  private environment =  environment.url;
  private token: any;
  public user: any;

  constructor( public http: Http,
               public router: Router,
               public _subirArchivo: SubirArchivosService ) {
    this.cargarStorage();
    let getLocalStorage = localStorage.getItem('user');
    this.user = JSON.parse(getLocalStorage);
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
                  this.user = res.json();
                  console.log('usuario', this.user);
                  localStorage.setItem('user', JSON.stringify(res.json().findEmail));
                  localStorage.setItem('token', res.json().userToken);
                  this.token = localStorage.getItem('token');
                  return res.json().userToken;
                }
               });
  }

  logout() {
    this.token = null;

    localStorage.removeItem('token');
    localStorage.removeItem('user');
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

  takeImageUser() {

    console.log(this.user.img);
    let url = this.environment + '/usuario/' + this.user.img;

    return this.http.get(url, { responseType: ResponseContentType.Blob})
             .map((res: Response ) => {
              //  console.log('respuesta', res);
               return res;
             });
  }


  actUsuario(usuario, id) {
    console.log(usuario);
    let url = this.environment + `/${id}` ;
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.put(url, usuario, options)
             .map(res => {
               localStorage.setItem('user', JSON.stringify(res.json()));
               return res.json();
             });
  }

  cambiarImage( archivo: File, id: string ) {
    this._subirArchivo.subirArchivo(archivo, 'usuario', id )
                      .then((res: any) => {
                        console.log(res);
                        this.user.img = res.usuario.img;
                        // swal('Imagen act', this.usuario.nombre, 'success');
                        // this.guar
                      }).catch(res => {
                        console.log(res);
                      });
  }

}
