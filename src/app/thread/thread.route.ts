import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ThreadComponent } from './thread.component';

export const ThreadRoutes: Routes = [
  
  { path: 'thread/:id', component: ThreadComponent }
];
