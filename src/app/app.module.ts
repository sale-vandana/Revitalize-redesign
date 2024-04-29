import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { VegiesComponent } from './vegies/vegies.component';
import { FruitsComponent } from './fruits/fruits.component';
import { CareersComponent } from './careers/careers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AddVComponent } from './add-v/add-v.component';
import { AddFComponent } from './add-f/add-f.component';
import { ManageVComponent } from './manage-v/manage-v.component';
import { ManageFComponent } from './manage-f/manage-f.component';
import { BuyNowComponent } from './buy-now/buy-now.component';
import { AddtoCartComponent } from './addto-cart/addto-cart.component';
import { FormsModule } from '@angular/forms';
import { PulsesComponent } from './pulses/pulses.component';
import { HttpClientModule } from '@angular/common/http';
import { DummyComponent } from './dummy/dummy.component';
import { OlddesignsComponent } from './olddesigns/olddesigns.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    VegiesComponent,
    FruitsComponent,
    CareersComponent,
    NavbarComponent,
    DashboardComponent,
    LoginComponent,
    AddVComponent,
    AddFComponent,
    ManageVComponent,
    ManageFComponent,
    BuyNowComponent,
    AddtoCartComponent,
    PulsesComponent,
    DummyComponent,
    OlddesignsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
