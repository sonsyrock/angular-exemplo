import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  compartilhar() { //Método que exibi uma mensagem na tela quando é acionado no botão em product-list.component.html
    window.alert('O produto foi compartilhado!');
  }
  onNotify(){ //Método que faz a mesma coisa da linha 13
    window.alert('Você será notificado caso este produto fique disponível');
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/