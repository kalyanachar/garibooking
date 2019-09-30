import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HirecarComponent} from './hirecar.component';
const routes: Routes = [
  {
    path: '',
    component: HirecarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HirecarRoutingModule { }
