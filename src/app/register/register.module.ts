import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RegisterComponent } from './register.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule],
  declarations: [ RegisterComponent ],
  bootstrap:    [ RegisterComponent ]
})

export class RegisterModule { }
