import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AddtoCartComponent } from './addto-cart/addto-cart.component';
import { CareersComponent } from './careers/careers.component';
import { DummyComponent } from './dummy/dummy.component';
import { VegiesComponent } from './vegies/vegies.component';
import { FruitsComponent } from './fruits/fruits.component';
import { PulsesComponent } from './pulses/pulses.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path : 'dummy', component:DummyComponent},
  {path:'navbar',component:NavbarComponent,
children : [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'cart',component:AddtoCartComponent},
  {path:'careers',component:CareersComponent},
  {path:'gold',component:VegiesComponent},
  {path:'silver',component:FruitsComponent},
  {path:'diamond',component:PulsesComponent }
]},
  {path:'admin',component:DashboardComponent,
  children : [
    {path:'home',component:HomeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
