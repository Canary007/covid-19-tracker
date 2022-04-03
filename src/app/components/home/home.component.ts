import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  globalCases = {
    TotalConfirmed: 0,
    TotalRecovered: 0,
    TotalDeaths: 0,
    NewConfirmed: 0,
    NewRecovered: 0,
    NewDeaths: 0
  };
  countries: string[] = [];
  countryWiseConfirmedData: any[] = [];
  countryWiseRecoveredData: any[] = [];
  countryWiseDeceasedData: any[] = [];


  constructor(
    private web: WebService
  ) { }

  ngOnInit(): void {
    this.web.getData()
      .subscribe(res => {
        // const response = res.Global;
        this.globalCases = res.Global;
        res.Countries.forEach((element: any) => {
          this.countries.push(element.Country);
          this.countryWiseConfirmedData.push(element.TotalConfirmed);
          this.countryWiseRecoveredData.push(element.TotalRecovered);
          this.countryWiseDeceasedData.push(element.TotalDeaths);
        });
      });
  }

  clearFilters() {

  }

}
