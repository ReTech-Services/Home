import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { StorefrontComponent } from './pages/storefront/storefront.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
