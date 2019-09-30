import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HirecarRoutingModule } from './hirecar-routing.module';
import { HirecarComponent } from './hirecar.component';
// core
import { CoreModule } from '../../core/core.module';
@NgModule({
  declarations: [HirecarComponent],
  imports: [
    CommonModule,
    HirecarRoutingModule,
    CoreModule
  ]
})
export class HirecarModule { }
