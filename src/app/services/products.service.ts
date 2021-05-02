import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGetProductResponse } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  //page numbers
  pageNumber!: number;
  value!: number;

  constructor(private http: HttpClient) { }

  //receiving products from database
  getProductItem(): Observable<IGetProductResponse> {
    return this.http.get<IGetProductResponse>(`https://nodejs-final-mysql.herokuapp.com/products?keyword=&pageNumber=${this.pageNumber}`);
  }
  
  //redirecting to the right page
  goToPage(value: number){
    this.pageNumber = value;
    return this.getProductItem();
  }
}
