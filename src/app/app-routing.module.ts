import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ClientRegistrationFormComponent } from './client-registration-form/client-registration-form.component';
import { CompanyRegistrationFormComponent } from './company-registration-form/company-registration-form.component';
import {BookingComponent} from './booking/booking.component';
import {BookingConfirmationComponent} from './booking-confirmation/booking-confirmation.component';
import {ActiveOrdersListComponent} from './active-orders-list/active-orders-list.component';
import {OrdersDetailsComponent} from './orders-details/orders-details.component';
import {CompanyInfoComponent} from './company-info/company-info.component';
import {CompanyProfileEditorComponent} from './company-profile-editor/company-profile-editor.component';
import {CompaniesListComponent} from './companies-list/companies-list.component';
import {ClientProfileEditorComponent} from './client-profile-editor/client-profile-editor.component';

const appRoutes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'login', component : LoginPageComponent },
  { path: 'clientEdit', component : ClientProfileEditorComponent },
  { path: 'clientReg', component : ClientRegistrationFormComponent },
  { path: 'companies', component : CompaniesListComponent },
  { path: 'companyEdit', component : CompanyProfileEditorComponent },
  { path: 'companyInfo', component : CompanyInfoComponent },
  { path: 'companyReg', component : CompanyRegistrationFormComponent },
  { path: 'ordersDetail', component : OrdersDetailsComponent },
  { path: 'activeOrders', component : ActiveOrdersListComponent },
  { path: 'booking', component : BookingComponent },
  { path: 'bookingConfirm', component : BookingConfirmationComponent },
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
