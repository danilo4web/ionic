import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';

import { Restaurante } from '../../domain/restaurante/restaurante';
import { Cardapio } from '../../domain/cardapio/cardapio';
import { CarrinhoPage } from '../carrinho/carrinho';

@Component({
  selector: 'page-cardapios',
  templateUrl: 'cardapios.html'
})
export class CardapiosPage {
  
  public restaurante: Restaurante;
  public url: string;
  public cardapios: Cardapio[];

  constructor(
    public navCtrl: NavController, 
    private _http: Http, 
    public _loadingCtrl: LoadingController,
    public _alertCtrl: AlertController,
    public navParams: NavParams
  ) {
  
    this.restaurante = this.navParams.get('RestauranteSelecionado');
    console.log(this.restaurante);

    this.url = "http://pedidos.localhost/index.php/page/get_ionic_cardapio_json/" + this.restaurante.id;
  }

  ngOnInit() {

    let loader = this._loadingCtrl.create({
      content: 'Buscando cardápio. Aguarde...'
    });
    loader.present();

    this._http
      .get(this.url)
      .map( res => res.json() )
      .toPromise()
      .then(cardapios => {
        this.cardapios = cardapios;
        loader.dismiss();
      })
      .catch(err => {
        console.log(err);
        loader.dismiss();
        this._alertCtrl
          .create({
            title: "Falha na Conexão!",
            buttons: [{ text: 'OK, Estou ciente'}],
            subTitle: "Não foi possível obter o cardápio"
          }).present();
      })
  }


  seleciona(cardapio) {

    console.log("Cardapio - seleciona");
    console.log(cardapio);
    console.log("===================");

    this.navCtrl.push(CarrinhoPage, {CardapioSelecionado: cardapio});

  }
}

