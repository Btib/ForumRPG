import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LostpwComponent } from './lostpw.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule],
  declarations: [ LostpwComponent ],
  bootstrap:    [ LostpwComponent ]
})

export class LostpwModule { }