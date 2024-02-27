import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBankComponent } from './login-bank.component';

describe('LoginBankComponent', () => {
  let component: LoginBankComponent;
  let fixture: ComponentFixture<LoginBankComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginBankComponent]
    });
    fixture = TestBed.createComponent(LoginBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
