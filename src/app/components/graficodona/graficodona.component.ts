import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graficodona',
  templateUrl: './graficodona.component.html',
  styles: []
})
export class GraficodonaComponent implements OnInit {
  @Input() doughnutChartData: any;
  @Input() doughnutChartLabels: any;
  @Input() doughnutChartType: any;



  constructor() { }

  ngOnInit() {
  }

}
