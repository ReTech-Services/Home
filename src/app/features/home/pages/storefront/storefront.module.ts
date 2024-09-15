import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorefrontRoutingModule } from './storefront-routing.module';
import { StorefrontComponent } from './storefront.component';
import { RippleModule } from 'primeng/ripple';
import { HomeModule } from '../../home.module';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';

@NgModule({
  declarations: [StorefrontComponent, FooterComponent, NavbarComponent],
  imports: [
    CommonModule,
    StorefrontRoutingModule,
    RippleModule,
  ]
})
export class StorefrontModule { }
