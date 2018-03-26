import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';

import { RestaurantesPage } from '../pages/restaurantes/restaurantes';
import { PedidosPage } from '../pages/pedidos/pedidos';
import { MinhaContaPage } from '../pages/minha-conta/minha-conta';
import { RedesSociaisPage } from '../pages/redes-sociais/redes-sociais';
import { LoginPage } from '../pages/login/login';
import { DetalheDoPedidoPage } from '../pages/detalhe-do-pedido/detalhe-do-pedido';
import { CarrinhoPage } from '../pages/carrinho/carrinho';
import { CardapiosPage } from '../pages/cardapios/cardapios';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { SobrePage } from '../pages/sobre/sobre';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@NgModule({
  declarations: [
    MyApp,
    RestaurantesPage,
    RedesSociaisPage,
    PedidosPage,
    DetalheDoPedidoPage,
    CarrinhoPage,
    CardapiosPage,
    MinhaContaPage,
    CadastroPage,
    LoginPage,
    SobrePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RestaurantesPage,
    PedidosPage,
    MinhaContaPage,
    RedesSociaisPage,
    LoginPage,
    DetalheDoPedidoPage,
    CarrinhoPage,
    CardapiosPage,
    CadastroPage,
    SobrePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}