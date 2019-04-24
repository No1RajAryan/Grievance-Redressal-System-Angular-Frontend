import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './Components/User/register/register.component';
import { LoginComponent } from './Components/User/login/login.component';
import { NewProblemComponent } from './Components/User/new-problem/new-problem.component';
import { UserHomeComponent } from './Components/User/user-home/user-home.component';
import { HomeComponent } from './Components/home/home.component';
import { AdminHomeComponent } from './Components/admin/admin-home/admin-home.component';
import { RegisterAdminComponent } from './Components/admin/register-admin/register-admin.component';
import { RegisterInChargeComponent } from './Components/admin/register-in-charge/register-in-charge.component';
import { InChargetHomeComponent } from './Components/inCharge/in-charget-home/in-charget-home.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user/home', component: UserHomeComponent},
  {path: 'user/newProblem',component:NewProblemComponent},
  {path: 'admin/home', component: AdminHomeComponent},
  {path: 'admin/registerAdmin', component: RegisterAdminComponent},
  {path: 'admin/registerInCharge', component: RegisterInChargeComponent},
  {path: 'inCharge/home', component: InChargetHomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path: '', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
