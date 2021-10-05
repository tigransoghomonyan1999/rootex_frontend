import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseCsvComponent } from './response-csv.component';

describe('ResponseCsvComponent', () => {
  let component: ResponseCsvComponent;
  let fixture: ComponentFixture<ResponseCsvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponseCsvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
