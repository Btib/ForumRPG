import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { ProfileService } from './profile.service';


@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule],
  declarations: [ ProfileComponent ],
  bootstrap:    [ ProfileComponent ],
  providers:    [ ProfileService]
})

export class ProfileModule { }