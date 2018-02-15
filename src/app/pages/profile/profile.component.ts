import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario.model';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public usuario: Usuario;
  public imagenSubir: File;
  public imagenTemp: string;
  constructor( public _apiUser: UsuarioService ) {
    this.usuario = this._apiUser.user;
    console.log(this.usuario);
  }

  ngOnInit() {
  }


  guardar(termino: Usuario) {

    console.log(termino);

    this._apiUser.actUsuario(termino, this.usuario._id).subscribe(res => {
      console.log(res);
    });
  }


  seleccionImagen( archivo: File ) {
    if (!archivo ) {
      this.imagenSubir = null;
      return;
    }

    if ( archivo.type.indexOf('imagen') < 0 ) {
    }

    this.imagenSubir = archivo;

    let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL( archivo );

    reader.onloadend = () => {
      console.log(reader.result);
      this.imagenTemp = reader.result;
    };

    console.log(archivo);
  }

  cambiarImagen() {
    this._apiUser.cambiarImage( this.imagenSubir , this.usuario._id );
  }

}
