import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentfieldComponent } from './paymentfield.component';

describe('PaymentfieldComponent', () => {
  let component: PaymentfieldComponent;
  let fixture: ComponentFixture<PaymentfieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentfieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
