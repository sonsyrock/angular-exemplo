import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/core';
import {products} from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit { //No typescript, quando vc tá definindo um tipo (seja classe, enum, interface ou qualquer outro) e vc vai usar esse tipo em outro arquivo vc tem que exportar. Por isso existe esta classe está com a propriedade (export).

  product;
  
  constructor() { }

  ngOnInit() {
  }

}