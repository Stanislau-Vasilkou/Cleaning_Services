import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { ActiveOrdersListComponent } from './active-orders-list/active-orders-list.component';
import { BookingComponent } from './booking/booking.component';
import { BookingConfirmationComponent } from './booking-confirmation/booking-confirmation.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { OrdersDetailsComponent } from './orders-details/orders-details.component';
import { HeaderComponent } from './header/header.component';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguagePanelComponent } from './header/language-panel/language-panel.component';
import { LogoInfoPanelComponent } from './header/logo-info-panel/logo-info-panel.component';
import { ClientRegistrationFormComponent } from './client-registration-form/client-registration-form.component';
import { CompanyRegistrationFormComponent } from './company-registration-form/company-registration-form.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { ClientProfileEditorComponent } from './client-profile-editor/client-profile-editor.component';
import { CompanyProfileEditorComponent } from './company-profile-editor/company-profile-editor.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ActiveOrdersListComponent,
    BookingComponent,
    BookingConfirmationComponent,
    CompaniesListComponent,
    OrdersDetailsComponent,
    HeaderComponent,
    LanguagePanelComponent,
    LogoInfoPanelComponent,
    ClientRegistrationFormComponent,
    CompanyRegistrationFormComponent,
    ModalWindowComponent,
    CompanyInfoComponent,
    ClientProfileEditorComponent,
    CompanyProfileEditorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
