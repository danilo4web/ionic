import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CardapiosPage } from '../pages/cardapios/cardapios';
import { CarrinhoPage } from '../pages/carrinho/carrinho';
import { DetalheDoPedidoPage } from '../pages/detalhe-do-pedido/detalhe-do-pedido';
import { MinhaContaPage } from '../pages/minha-conta/minha-conta';
import { PedidosPage } from '../pages/pedidos/pedidos';
import { RedesSociaisPage } from '../pages/redes-sociais/redes-sociais';
import { RestaurantesPage } from '../pages/restaurantes/restaurantes';
import { SobrePage } from '../pages/sobre/sobre';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = RestaurantesPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToRestaurantes(params){
    if (!params) params = {};
    this.navCtrl.setRoot(RestaurantesPage);
  }
  goToCardapio(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CardapiosPage);
  }
  goToCarrinho(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CarrinhoPage);
  }
  goToDetalheDoPedido(params){
    if (!params) params = {};
    this.navCtrl.setRoot(DetalheDoPedidoPage);
  }
  goToMinhaConta(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MinhaContaPage);
  }
  goToPedidos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PedidosPage);
  }
  goToRedesSociais(params){
    if (!params) params = {};
    this.navCtrl.setRoot(RedesSociaisPage);
  }
  goToSobre(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SobrePage);
  }  
}
