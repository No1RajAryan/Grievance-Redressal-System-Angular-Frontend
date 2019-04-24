import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/User/register/register.component';
import { LoginComponent } from './Components/User/login/login.component';
import { NewProblemComponent } from './Components/User/new-problem/new-problem.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RegServiceService } from './reg-service.service';
import { UserNavBarComponent } from './Components/User/user-nav-bar/user-nav-bar.component';
import { UserHomeComponent } from './Components/User/user-home/user-home.component';
import { HomeComponent } from './Components/home/home.component';
import { LandingNavBarComponent } from './Components/landing-nav-bar/landing-nav-bar.component';
import { AdminHomeComponent } from './Components/admin/admin-home/admin-home.component';
import { InChargetHomeComponent } from './Components/inCharge/in-charget-home/in-charget-home.component';
import { RegisterInChargeComponent } from './Components/admin/register-in-charge/register-in-charge.component';
import { RegisterAdminComponent } from './Components/admin/register-admin/register-admin.component';
import { AdminNavBarComponent } from './Components/admin/admin-nav-bar/admin-nav-bar.component';
import { InchargeNavBarComponent } from './Components/inCharge/incharge-nav-bar/incharge-nav-bar.component';
import { AboutusComponent } from './aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NewProblemComponent,
    UserNavBarComponent,
    UserHomeComponent,
    HomeComponent,
    LandingNavBarComponent,
    AdminHomeComponent,
    InChargetHomeComponent,
    RegisterInChargeComponent,
    RegisterAdminComponent,
    AdminNavBarComponent,
    InchargeNavBarComponent,
    AboutusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    HttpClient,
    RegServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
