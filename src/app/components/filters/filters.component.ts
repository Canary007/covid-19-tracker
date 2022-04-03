import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit, OnChanges {
  @Input() countryList: any;
  filterForm!: FormGroup;

  statusList: any[] = ['Active', 'Recovered', 'Deceased'];

  constructor(
    private fb: FormBuilder
  ) {
    this.buildForm();
  }
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }

  buildForm() {
    this.filterForm = this.fb.group({
      locationCtrl: ['', []],
      statusCtrl: ['', []],
      start_date: ['', []],
      end_date: ['', []]
    });
  }

  makeAPICall() {

  }

  clearFilters() {

  }

}
