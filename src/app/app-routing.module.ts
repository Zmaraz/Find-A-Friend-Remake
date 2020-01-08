import { LoginComponent } from './login/login.component';
import { ShelterComponent } from './shelter/shelter.component';
import { AdoptionComponent } from './adoption/adoption.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // path for default
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // path for home
  { path: 'home', component: HomeComponent },
  // path for adoption page
  { path: 'adoption', component: AdoptionComponent},
  // path for shelter page
  { path: 'shelter', component: ShelterComponent },
  // path for login page
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
