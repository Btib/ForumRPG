import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeService } from './home.service';


@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule],
  declarations: [ HomeComponent ],
  bootstrap:    [ HomeComponent ],
  providers:    [ HomeService]
})

export class HomeModule { }