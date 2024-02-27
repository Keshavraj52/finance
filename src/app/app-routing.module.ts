import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ProfileComponent } from './profile/profile.component';
import { KycComponent } from './kyc/kyc.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LoanapplicationComponent } from './loanapplication/loanapplication.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginBankComponent } from './login-bank/login-bank.component';
import { BankDashComponent } from './bank-dash/bank-dash.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'footer',
    component:FooterComponent
  },
  {
    path:'aboutus',
    component:AboutusComponent
  },
  {
    path:'side-nav',
    component:SideNavComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'kyc',
    component:KycComponent
  },
  {
    path:'portfolio',
    component:PortfolioComponent
  },
  {
    path:'loan',
    component:LoanapplicationComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'banker',
    component:LoginBankComponent
  },
  {
    path:'bank-dash',
    component:BankDashComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
