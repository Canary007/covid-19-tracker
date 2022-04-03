import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-case-summary',
  templateUrl: './case-summary.component.html',
  styleUrls: ['./case-summary.component.scss']
})
export class CaseSummaryComponent implements OnInit, OnChanges {
  @Input() cases: any;

  caseSummary: any[] = [
    {
      title: 'Total Confirmed',
      count: 0,
      color: '#dc3545',
      background: '#ffdbea'
    },
    {
      title: 'Total Recovered',
      count: 0,
      color: '#28a745',
      background: '#c7ffc4'
    },
    {
      title: 'Total Deceased',
      count: 0,
      color: '#4e4f4e',
      background: '#e3e3e3'
    }
  ];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.caseSummary[0].count = this.cases.TotalConfirmed;
    this.caseSummary[1].count = this.cases.TotalRecovered;
    this.caseSummary[2].count = this.cases.TotalDeaths;
  }

  ngOnInit(): void {

  }

}
