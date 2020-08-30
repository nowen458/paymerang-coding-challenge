import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymerangPaymentOverviewComponent } from './paymerang-payment-overview.component';

describe('PaymerangPaymentOverviewComponent', () => {
  let component: PaymerangPaymentOverviewComponent;
  let fixture: ComponentFixture<PaymerangPaymentOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymerangPaymentOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymerangPaymentOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
