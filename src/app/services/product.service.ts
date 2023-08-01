import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { filter } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  id:any = '';
  newProductArr;
  productArr = new Subject<any[]>();
  baseURL:any = "http://localhost:3000/products";
  constructor(private http: HttpClient) { }

  //Load Products Read
  getAllProducts():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseURL}`)
    
  }

  getProductAll(){
    // this.productArr.next(this.http.get<Observable>(`${this.baseURL}`))
    this.newProductArr = this.http.get(`${this.baseURL}`)
    this.productArr.next(this.newProductArr)
    
  }

  getProductByID(){
    
    this.id = localStorage.getItem("itemId");
    return this.http.get(`${this.baseURL}?id=${this.id}`);
  }

  getSingleProduct(id:any){
    return this.http.get(`${this.baseURL}/${id}`, {
      observe: 'body'
    });
  }

  addProduct(body: any){
    return this.http.post(`${this.baseURL}`,body, {
      observe: 'body'
    });
  }

  updateProduct(id:any, data:any){
    return this.http.put(`${this.baseURL}/${id}`, data, {
      observe: 'body'
    })
    
  }

  deleteProduct(id:any){
    return this.http.patch(`${this.baseURL}/${id}`, {isItemDeleted:true}, {
      observe: 'body'
    })
    
  }
}


