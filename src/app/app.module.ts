import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginModule }  from './login/login.module';
import { RegisterModule }  from './register/register.module';
import { AppComponent }  from './app.component';

import { appRoutes } from './app.routes';

@NgModule({
  imports:      [ BrowserModule , HttpModule, FormsModule, LoginModule, RegisterModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
