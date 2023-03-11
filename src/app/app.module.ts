import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGateway } from 'src/gateways/auth.gateway';
import { BullBackHttpClient } from 'src/gateways/bull-back-http-client';
import { NavBarComponent } from './components/navbar/navbar.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { AccountBarComponent } from './components/account-bar/account-bar.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AccountService } from 'src/services/account.service';
import { AuthHttpInterceptor } from 'src/interceptors/auth-http.interceptos';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    LogoutComponent,
    AccountBarComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
    AuthGateway,
    BullBackHttpClient,
    AccountService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
