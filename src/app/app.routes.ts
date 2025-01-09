import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundcomponentComponent } from './notfoundcomponent/notfoundcomponent.component';

export const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"portfolio",component:PortfolioComponent},
  {path:"contact",component:ContactComponent},
  {path:"**",component:NotfoundcomponentComponent}
];
