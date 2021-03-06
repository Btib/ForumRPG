import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RegisterComponent } from './register.component';
import { RegisterService } from './register.service';


@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule],
  declarations: [ RegisterComponent ],
  bootstrap:    [ RegisterComponent ],
  providers: [ RegisterService]
})

export class RegisterModule { }
