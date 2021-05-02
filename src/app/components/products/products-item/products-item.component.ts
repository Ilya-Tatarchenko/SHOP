import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IGetProductResponse, IProduct } from 'src/app/models/models';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.scss']
})

export class ProductsItemComponent implements OnInit {

  @Input('product') product!: IProduct;

  constructor(public router: Router) { }

  ngOnInit(): void {}

}
