import { Component, OnInit } from '@angular/core';
import { IGetProductResponse } from 'src/app/models/models';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  //array with products
  products: any[] = [];

  //page numbers
  value!: number;

  constructor(public productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProductItem()
      .subscribe((res: IGetProductResponse) => {
        this.products = res.products;
        console.log(this.products);
      })
  }

  //sending the number of the page to the function in productsService
  pageNumber(value: number){
    this.productsService.goToPage(value).subscribe((newProducts: IGetProductResponse) => {
      this.products = newProducts.products;
    })
  }

}
