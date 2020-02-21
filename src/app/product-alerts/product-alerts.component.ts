import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';//Esta linha importa o Ipunt da biblioteca, angular/core. Serve para receber um produto como entrada.


@Component({ //Esta linha indica que esta classe é um componente.
  selector: 'app-product-alerts', //o selector é o nome que atribuimos a classe componente
  templateUrl: './product-alerts.component.html', //Linha 7 e 8 são gerados pelo StackBlitz
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product;//Não entendi bem esta linha. Acredito que está associando o Input a classe pai product
  constructor() { }

  ngOnInit() {
  }

}