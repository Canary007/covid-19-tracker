import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';
// import { Label } from 'ng2-charts';

@Component({
  selector: 'app-case-summary-chart',
  templateUrl: './case-summary-chart.component.html',
  styleUrls: ['./case-summary-chart.component.scss']
})
export class CaseSummaryChartComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() countryDataConfirmed: any;
  @Input() countryDataRecovered: any;
  @Input() countryDataDeceased: any;
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  barChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataset[] = [
    { data: [], label: 'Confirmed' },
    { data: [], label: 'Recovered' },
    { data: [], label: 'Deceased' }
  ];

  constructor() {

  }
  ngAfterViewInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {
    this.barChartData[0].data = this.countryDataConfirmed;
    this.barChartData[1].data = this.countryDataRecovered;
    this.barChartData[2].data = this.countryDataDeceased;
  }



}
