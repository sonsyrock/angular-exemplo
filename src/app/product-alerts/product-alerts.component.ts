import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';//Esta linha importa o Ipunt da biblioteca, angular/core. Serve para receber um produto como entrada.
import {Output, EventEmitter} from '@angular/core';//Nesta linha, importamos as bibliotecas Output e EventEmitter para que o botão (Notificar) prensente no arquivo, product-list.componente.html funcione.


@Component({ //Esta linha indica que esta classe é um componente.
  selector: 'app-product-alerts', //o selector é o nome que atribuimos a classe componente
  templateUrl: './product-alerts.component.html', //Linha 7 e 8 são gerados pelo StackBlitz
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product;//Não entendi bem esta linha. Acredito que está associando o Input a classe pai product
  @Output() notify = new EventEmitter();//Assim como a linha acima, estamos puxando a propriedade Output da importação na linha 3, e construindo um novo objeto EventEmitter
  constructor() { }

  ngOnInit() {
  }

}