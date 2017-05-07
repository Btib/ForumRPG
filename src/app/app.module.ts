import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginModule }  from './login/login.module';
import { RegisterModule }  from './register/register.module';
import { LostpwModule }  from './lostpw/lostpw.module';
import { HomeModule }  from './home/home.module';

import { AppComponent }  from './app.component';

import { appRoutes } from './app.routes';

@NgModule({
  imports:      [ BrowserModule , HttpModule, FormsModule, LoginModule, RegisterModule, LostpwModule, HomeModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
