import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    this.contar( ).then((mensaje) => {
      console.log('termino', mensaje);
    }).catch(e => {
      console.error('error en la promesa', e);
    });
  }

  ngOnInit() {
  }

  contar(): Promise<any> {
    return new Promise((resolve, reject) => {
      let contador = 0;
      let intervalo = setInterval( () => {
        contador += 1;

        console.log(contador);

        if (contador === 3) {
          resolve( true );
          clearInterval(intervalo);
        }
      }, 1000);
    });
  }

}
