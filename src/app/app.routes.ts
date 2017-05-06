import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginRoutes } from './login/login.route';

export const routes: Routes = [
     ...LoginRoutes,
     { path: '',       component: LoginComponent },
     { path: 'register', component: RegisterComponent },
     { path: 'home',   component: HomeComponent },
     { path: '**',     component: LoginComponent }
];
