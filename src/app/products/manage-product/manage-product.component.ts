import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.scss']
})
export class ManageProductComponent implements OnInit {
  manageForm: FormGroup;
  isItemDeleted:boolean = false;
  status: String = 'In Stock'
  categoryOfProducts = [
    {value: 'Electronics', viewValue: 'Electronics'},
    {value: 'Clothes', viewValue: 'Clothes'},
    {value: 'Furnitures', viewValue: 'Furnitures'},
    {value: 'Instrument', viewValue: 'Instrument'},
    {value: 'Other', viewValue: 'Other'}
  ]
  isUpdateRequest:boolean = false;
  updateId:any;
  updatedProductObj:any;
  listOfProduct: any = []
  lastChildId:number = 0;
  constructor(
    private router:Router,
    private productService:ProductService,
    private activatedRoute: ActivatedRoute
  ) 
  {
    this.activatedRoute.queryParams.subscribe(params => {
        
      this.updateId = params['id']
      if(this.updateId != null){
        this.isUpdateRequest = true;
        this.productService.getSingleProduct(this.updateId).subscribe(
        data => {
          
          console.log(data)
          this.updatedProductObj = data
          
      this.manageForm.patchValue(this.updatedProductObj)
        },
        err => console.log(err)
      )

      }
      else{
        this.isUpdateRequest = false;
      }
   
    });
  }


  ngOnInit(): void {
    this.manageForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      price : new FormControl(null, [Validators.required, Validators.pattern('^\\d{0,8}(\\.\\d{1,4})?$')]),
      description: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
      image: new FormControl('https://i.pravatar.cc/', Validators.required),
      quantity: new FormControl(null, Validators.required),
    });
  }
  isValid(controlName: any){
    return this.manageForm.get(controlName)?.invalid && this.manageForm.get(controlName)?.touched

  }

  manageClicked(){
    
    let formValue = this.manageForm.value;
    let id = this.getId(this.isUpdateRequest, this.updateId);
    let idObj = { 'id': id, 'isItemDeleted': this.isItemDeleted, 'status': this.status } 
    let formValuesWithID = Object.assign(idObj, formValue)
    this.listOfProduct.push(formValuesWithID)
    console.log(this.listOfProduct);
    if(this.isUpdateRequest){
      this.productService.updateProduct(id, formValuesWithID)
      .subscribe(
        data => console.log('Procuct Updated Successfully'),
        err => console.error('Something went wrong')
        );
        this.manageForm.reset();
        this.router.navigateByUrl("products")
    }
    else{        
    
    this.productService.addProduct(formValuesWithID)
    .subscribe(
      data => console.log('User Registered Successfully'),
      err => console.error('Something went wrong')
      );
      this.manageForm.reset();
      this.router.navigateByUrl("products/landing")
    }

      
  }

  getId = function (updateFlag:boolean, updateID:any)  {
    if(updateFlag){
      let currentId = updateID;
      return currentId;
    }
    else{
     let currentId=  this.productService.getAllProducts().subscribe(
        data => {
         return this.lastChildId = data[data.length - 1].id;
          
        },
        err => console.log(err)
      )
      // let currentId:any = localStorage.getItem('id');
      if(currentId !== null){
        currentId ++
      }
        
        else{
          currentId = 1
        }
          
         return currentId;
      
    }
    }

}
