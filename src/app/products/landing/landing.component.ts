import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  themeColor = 'primary';
  public displayedProducts:any = [];
  public itemsToShow: number = 10;
  public itemsPerPage: number = 10;
  listOfProducts:any[] = [];
  public filteredProducts: any = [];
  public selectedCategories: string[] = [];
  public categories: string[];
  flag = true;
  options: any = []
  searchKey:string = '';
  constructor(
    private route: Router,
    private productService: ProductService,
    
  ) {}

  ngOnInit(): void {
    
    this.productService
      .getAllProducts()
      .pipe(
        map( results => results.filter( r => r.isItemDeleted == false && r.status == 'In Stock') )
      )
      .subscribe(
        (data) => { 
          this.listOfProducts = data;
          this.categories =   this.getUniqueCategories();
          this.filteredProducts = [...this.listOfProducts];
        },
        (err) => console.log(err)
      );
      
  }

  public loadMore(): void {
    this.itemsToShow += this.itemsPerPage;
  }

  

  viewProduct(event:any){
    let itemId =  event.currentTarget.id;
    localStorage.setItem("itemId", itemId);
    this.route.navigate(['products/vw-product']); 
  }

  public filterProductDropdown(category): void {
    const categoryValue = category.value;
    debugger;
    if (categoryValue === 'All') {
      this.filteredProducts = this.filteredProducts.sort((a, b) => a.id - b.id);
    }
    else if (categoryValue === 'priceHighToLow') {
      this.filteredProducts.sort((a, b) => b.price - a.price);
    }
    else if (categoryValue === 'priceLowToHigh') {
      this.filteredProducts.sort((a, b) => a.price - b.price);
    }
  }

  public applyFilters(): void {
    this.filteredProducts = this.listOfProducts.filter(product =>
      (this.selectedCategories.length === 0 || this.selectedCategories.includes(product.category))
    );
  }

  public resetFilters(): void {
    this.selectedCategories = [];
    this.applyFilters();
    this.filteredProducts = [...this.listOfProducts];
  }

  public onCategoryChange(checked: boolean, category: string): void {
    debugger;
    if (checked) {
      this.selectedCategories.push(category);
    } else {
      const index = this.selectedCategories.indexOf(category);
      if (index !== -1) {
        this.selectedCategories.splice(index, 1);
      }
    }
    this.applyFilters();
  }

  private getUniqueCategories(): string[] {
    return [...new Set(this.listOfProducts.map((product) => product.category))];
  }
  
  
}
