import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginRoutes } from './login/login.route';
import { RegisterRoutes } from './register/register.route';
import { LostpwRoutes } from './lostpw/lostpw.route';
import { HomeRoutes } from './home/home.route';


export const appRoutes: Routes = [
     ...LoginRoutes,
     ...RegisterRoutes,
     ...LostpwRoutes,
     ...HomeRoutes,
     { path: '**',     component: LoginComponent }
];
