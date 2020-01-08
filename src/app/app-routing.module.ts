import { LoginComponent } from './login/login.component';
import { ShelterComponent } from './shelter/shelter.component';
import { AdoptionComponent } from './adoption/adoption.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'adoption', component: AdoptionComponent},
  { path: 'shelter', component: ShelterComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
