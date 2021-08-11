import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { LandingComponent } from './landing/landing.component'
import { AuthGuard } from '../auth.guard';
import { VwProductComponent } from './vw-product/vw-product.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ManageProductComponent } from './manage-product/manage-product.component';

const routes: Routes = [
      {path: "products", canActivate : [AuthGuard], component: LandingComponent},
      {path: "vw-product", canActivate : [AuthGuard], component: VwProductComponent},
      {path: "inventory", canActivate : [AuthGuard], component: InventoryComponent},
      {path: "manage", canActivate : [AuthGuard], component: ManageProductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }