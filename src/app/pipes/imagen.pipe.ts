import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: string = 'usuario'): any {

    let url = environment.url + 'img';

    if ( !img ) {
      return url + '/usuarios/xxx';
    }


    switch (tipo) {
      case 'usuario':
        url += '/usuarios/' + img;
      break;
      case 'medico':
        url += '/medicos/' + img;
      break;
      case 'hospital':
        url += '/hospital/' + img;
      break;

      default:
      console.log('tipo no esta!!');
      url += '/usuarios/xxx';
    }


    return url;
  }

}
