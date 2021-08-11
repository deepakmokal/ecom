import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  id:any = '';
  baseURL:any = "http://localhost:3000/products";
  constructor(private http: HttpClient) { }

  //Load Products
  getAllProducts(){
    return this.http.get(`${this.baseURL}`)
  }

  getProductByID(){
    debugger
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
}


