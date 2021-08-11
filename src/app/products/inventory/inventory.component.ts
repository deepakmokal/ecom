import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  listOfProducts:any = [];
  constructor(
    private route: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {

    this.productService.getAllProducts().subscribe(
      data => {
        this.listOfProducts = data
           
      },
      err => console.log(err)
    )
  }

  onEditClicked(productId:any){
    
    this.route.navigate(['products/manage'], {
      queryParams: {
        id: productId
      }
    })
    }

}
