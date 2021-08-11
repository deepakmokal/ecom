import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-vw-product',
  templateUrl: './vw-product.component.html',
  styleUrls: ['./vw-product.component.scss']
})
export class VwProductComponent implements OnInit {
  data_prod: any = '';
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getProductByID().subscribe(
      data => {
        this.data_prod = data
      },
      err => { console.log(err)}
    )
  }

}
