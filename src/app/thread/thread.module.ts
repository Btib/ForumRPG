import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ThreadService } from './thread.service';
import { ThreadComponent } from './thread.component';


@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule],
  declarations: [ ThreadComponent ],
  bootstrap:    [ ThreadComponent ],
  providers:    [ ThreadService ]
})

export class ThreadModule { }