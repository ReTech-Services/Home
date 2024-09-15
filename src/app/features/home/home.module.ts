import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AppModule } from 'src/app/app.module';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
