import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule],
  declarations: [ LoginComponent ],
  //providers:    [ WebService ],
  bootstrap:    [ LoginComponent ]
})

export class LoginModule { }
