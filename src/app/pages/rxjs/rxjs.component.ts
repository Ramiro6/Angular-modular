import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {
    // this.regresaObservable().retry(2)
    // .subscribe(
    //   n => console.log('Subs', n),
    //   e => console.error('error', e),
    //   () => console.log('termino el observador')
    //   );

   this.subscription = this.regresaObservable().subscribe(
      n => console.log('Subs', n),
      e => console.error('error', e),
      () => console.log('termino el observador')
      );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('la pagina se va a cerrar');
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable( observer => {
      let contador = 0;

      let intervalo = setInterval( () => {

        contador += 1;

      let salida = {
        valor: contador
      };

        observer.next( salida );

        // if ( contador === 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }

        // if (contador === 2) {
        //   clearInterval(intervalo);
        //   observer.error('un error');
        // }

      }, 500 );
    }).retry(2)
      .map((res: any) => {
        return res.valor;
      })
      .filter((valor, index) =>  {
        console.log('filter', valor, index);

        if ( (valor % 2) === 1) {
          // impar
          return true;
        } else {
          // par
          return false;
        }
        // return true;
      });
  }

}
