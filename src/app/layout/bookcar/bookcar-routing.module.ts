import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookcarComponent} from './bookcar.component';
const routes: Routes = [
  {
    path: '',
    component: BookcarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookcarRoutingModule { }
