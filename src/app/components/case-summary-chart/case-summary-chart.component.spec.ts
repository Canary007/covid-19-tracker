import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseSummaryChartComponent } from './case-summary-chart.component';

describe('CaseSummaryChartComponent', () => {
  let component: CaseSummaryChartComponent;
  let fixture: ComponentFixture<CaseSummaryChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseSummaryChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseSummaryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
