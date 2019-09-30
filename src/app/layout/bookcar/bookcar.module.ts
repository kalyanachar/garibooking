import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookcarRoutingModule } from './bookcar-routing.module';
import { BookcarComponent } from './bookcar.component';
//core modules
import {CoreModule} from '../../core/core.module';
@NgModule({
  declarations: [BookcarComponent],
  imports: [
    CommonModule,
    BookcarRoutingModule,
    CoreModule
    
  ]
})
export class BookcarModule { }
