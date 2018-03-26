import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardapiosPage } from '../cardapios/cardapios';
import { CarrinhoPage } from '../carrinho/carrinho';

@Component({
  selector: 'page-detalhe-do-pedido',
  templateUrl: 'detalhe-do-pedido.html'
})
export class DetalheDoPedidoPage {

  constructor(public navCtrl: NavController) {
  }
  goToCardapio(params){
    if (!params) params = {};
    this.navCtrl.push(CardapiosPage);
  }goToCarrinho(params){
    if (!params) params = {};
    this.navCtrl.push(CarrinhoPage);
  }goToDetalheDoPedido(params){
    if (!params) params = {};
    this.navCtrl.push(DetalheDoPedidoPage);
  }
}
