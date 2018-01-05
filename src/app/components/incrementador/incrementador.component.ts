import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Input() public progreso: number = 50;
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  changeValue( termino ) {

    if (this.progreso >= 100 && termino > 0) {
      return;
    }

    if (this.progreso <= 0 && termino < 0) {
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + termino;

    this.cambioValor.emit(this.progreso);
  }


  onChanges( event: number ) {
    console.log(event);

    console.log(this.txtProgress);

    // let elementHtml: any = document.getElementsByName('progreso')[0];

    if (event >= 100) {
      this.progreso = 100;
    } else if (event <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = event;
    }


    // elementHtml.value = this.progreso;
    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit(event);

    this.txtProgress.nativeElement.focus();
  }

}
