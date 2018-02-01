import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../model/usuario.model';
declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public router: Router,
               public _api: UsuarioService ) { }

  email: string;
  public recuerdame: boolean = false;
  ngOnInit() {
    init_plugins();

    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 1) {
      this.recuerdame = true;
    }
  }

  ingresar( forma: NgForm ) {
    if (forma.invalid) {
      return;
    }

    let usuario = new Usuario(null, forma.value.email, forma.value.password );
    // console.log(forma.value);
    // console.log(forma.valid);

    this._api.login(usuario, forma.value.recuerdame).subscribe( res => {
      console.log(res);
      this.router.navigate(['/dashboard']);
    });
    // this.router.navigate(['/dashboard']);
  }

}
