import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hb-history-chart',
  templateUrl: './history-chart.component.html',
  styleUrls: ['./history-chart.component.scss']
})
export class HistoryChartComponent {

  @Input() data;
}
