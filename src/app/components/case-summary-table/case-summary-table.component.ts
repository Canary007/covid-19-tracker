import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-case-summary-table',
  templateUrl: './case-summary-table.component.html',
  styleUrls: ['./case-summary-table.component.scss']
})
export class CaseSummaryTableComponent implements OnInit, OnChanges {
  @Input() data!: any[];
  searchCtrl = new FormControl('');
  tableSwitch: string = 'loading';
  tableData!: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'name',
    'confirmed',
    'recovered',
    'deceased'
  ];

  constructor(
    private web: WebService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.web.getData()
      .subscribe(res => {
        this.tableData = new MatTableDataSource<any>(res.Countries);
        this.tableSwitch = 'active';
      });
  }

  getFilteredData(searchString: string) {
    this.tableData.filter = searchString.trim().toLocaleLowerCase();
    if (this.tableData.data.length === 0) {
      this.tableSwitch = 'nodata';
    } else {
      this.tableSwitch = 'active';
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  refresh() {
    this.searchCtrl.setValue('');
    this.getData();
  }

}
