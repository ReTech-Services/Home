import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorefrontRoutingModule } from './storefront-routing.module';
import { StorefrontComponent } from './storefront.component';
import { RippleModule } from 'primeng/ripple';
import { AppModule } from 'src/app/app.module';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';

@NgModule({
  declarations: [StorefrontComponent,NavbarComponent,FooterComponent],
  imports: [
    CommonModule,
    StorefrontRoutingModule,
    RippleModule,
  ]
})
export class StorefrontModule { }
