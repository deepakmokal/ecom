import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { SharedModule } from '../shared/shared/shared.module';
import { LandingComponent } from './landing/landing.component';
import { VwProductComponent } from './vw-product/vw-product.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ShortenPipe } from '../pipes/shorten.pipe';

@NgModule({
  declarations: [
    ProductsComponent,
    LandingComponent,
    VwProductComponent,
    InventoryComponent,
    ManageProductComponent,
    
    
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
  ]
})
export class ProductsModule { }
