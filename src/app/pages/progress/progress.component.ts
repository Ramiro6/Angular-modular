import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  public progreso1: number = 20;
  public progreso2: number = 50;

  constructor() { }

  ngOnInit() {
  }

  // actualizar( event: number ) {
  //   console.log(event);
  //   this.progreso1 = event;
  // }
}
