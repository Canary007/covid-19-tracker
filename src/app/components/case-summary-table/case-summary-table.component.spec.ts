import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseSummaryTableComponent } from './case-summary-table.component';

describe('CaseSummaryTableComponent', () => {
  let component: CaseSummaryTableComponent;
  let fixture: ComponentFixture<CaseSummaryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseSummaryTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseSummaryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
