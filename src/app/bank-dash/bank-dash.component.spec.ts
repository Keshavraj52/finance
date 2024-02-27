import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankDashComponent } from './bank-dash.component';

describe('BankDashComponent', () => {
  let component: BankDashComponent;
  let fixture: ComponentFixture<BankDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankDashComponent]
    });
    fixture = TestBed.createComponent(BankDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
