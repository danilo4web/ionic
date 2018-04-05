import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';

import { DetalheDoPedidoPage } from '../detalhe-do-pedido/detalhe-do-pedido';
import { CardapiosPage } from '../cardapios/cardapios';
import { CarrinhoPage } from '../carrinho/carrinho';
import { LoginPage } from '../login/login';

import { Pedido } from '../../domain/pedido/pedido';

@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html'
})
export class PedidosPage {
  public url: string;
  public pedidos: Pedido[];  

  constructor(
    public navCtrl: NavController,
    private _http: Http,
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController,
    public navParams: NavParams
  ){


    console.log(sessionStorage.getItem('usuarioId'));
    this.url = "http://pedidos.localhost/index.php/page/get_ionic_pedidos_json/";
    this.url = this.url + sessionStorage.getItem('usuarioId');


    console.log(this.url);
  }
  
  ngOnInit(){
         
    if(sessionStorage.getItem('flagLogado') != "sim"){
      this.goToLogin();
    }

    let loader = this._loadingCtrl.create({
        content: 'Buscando pedidos. Aguarde...'
    });

    loader.present();

    this._http
        .get(this.url)
        .map( res => res.json())
        .toPromise()
        .then( pedidos => {
            this.pedidos = pedidos;

            console.log(this.pedidos);

            loader.dismiss();
        })
        .catch(err =>{
            console.log(err);
            loader.dismiss();
            this._alertCtrl
                .create({
                    title: 'Falha na conexão',
                    buttons: [{ text: 'OK estou ciente!'}],
                    subTitle: "Não foi possivel obter o cardapio. Tente mais tarde."
                }).present();
        });
  }

  goToLogin() {
    this.navCtrl.setRoot(LoginPage);
  }  
}