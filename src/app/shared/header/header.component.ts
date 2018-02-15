import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

  private imageProfile: any;

  constructor( public _apiUser: UsuarioService ) { }

  ngOnInit() {

    // this._apiUser.takeImage()

    this._apiUser.takeImageUser().subscribe(res => {
      this.createImageFromBlob(res.blob());
    });

    // console.log(this.imageProfile);


    // this._apiUser.usuario().subscribe(res => {
    //   console.log(res);
    // });
  }


  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    // reader.addEventListener('load', () => {
    //   console.log(reader);
    // }, false);

    console.log('imagen', image);

    // this.imageProfile = reader.readAsDataURL(image);

    console.log(this.imageProfile);
  }
}
