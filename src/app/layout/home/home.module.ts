import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { OwlModule } from 'ngx-owl-carousel';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { CoreModule } from '../../core/core.module';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    OwlModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    CoreModule
  ]
})
export class HomeModule { }
