import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  listOfProducts:any = [];
  options: any = []
  searchKey:string = '';
  constructor(
    private route: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    
    this.productService.getAllProducts().subscribe(
      data => {
        
        this.listOfProducts = data
        console.log(data)       
      },
      err => console.log(err)
    )
  }

  viewProduct(event:any){
    debugger;
    let itemId =  event.currentTarget.id;
    localStorage.setItem("itemId", itemId);
    this.route.navigate(['products/vw-product']);
    
  }
  
  
}
