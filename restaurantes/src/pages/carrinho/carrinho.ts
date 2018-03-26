import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';

import { DetalheDoPedidoPage } from '../detalhe-do-pedido/detalhe-do-pedido';
import { CardapiosPage } from '../cardapios/cardapios';
import { LoginPage } from '../login/login';
import { PedidosPage } from '../pedidos/pedidos';

import { Pedido } from '../../domain/pedido/pedido';
import { Cardapio } from '../../domain/cardapio/cardapio';
import { Usuario } from '../../domain/usuario/usuario';


@Component({
  selector: 'page-carrinho',
  templateUrl: 'carrinho.html'
})
export class CarrinhoPage {
  public data;
  public http;
  public url: string;
  public pedido: Pedido;
  public cardapio: Cardapio;

  constructor(public navCtrl: NavController, public _alertCtrl: AlertController, http: Http, public navParams: NavParams) {
    this.pedido = new Pedido(null,null,null,null,null,null,null,null);

    this.pedido.usuario = new Usuario(sessionStorage.getItem('usuarioId'), sessionStorage.getItem('usuarioNome'), sessionStorage.getItem('usuarioLogado'), null, sessionStorage.getItem('flagLogado'));
    this.pedido.cardapio = this.navParams.get('CardapioSelecionado');

    console.log("Carrinho - constructor");
    console.log(this.pedido);
    console.log(this.pedido.cardapio);
    console.log(this.pedido.usuario);
    console.log("=====================");
    console.log("=====================");

    this.data = {};
    this.data.response = '';
    this.http = http;
    this.url = 'http://pedidos.localhost/index.php/page/cadastrar_pedido_ionic';
  }

  ngOnInit() {
    if(sessionStorage.getItem('flagLogado') != 'sim') {
      this.goToLogin();
    }
  }

  submit() {
    var data = JSON.stringify({
      cardapio_id: this.pedido.cardapio.id,
      usuario_id: this.pedido.usuario.id,
      valor: this.pedido.cardapio.preco,
      taxaEntrega: "10.00",
      nome: this.pedido.usuario.nome,
      email: this.pedido.usuario.email,
      observacao: this.pedido.observacao
    });

    console.log(data);

    this.http.post(this.url, data)
    .subscribe(data => {
      this.data.response = data._body;
      this._alertCtrl
        .create({
          title: 'Sucesso',
          buttons: [{ text: 'OK' }],
          subTitle: this.data.response
        }).present();

      this.goToPedidos();
    
    }, error => {
            console.log("Oooops!");
            this._alertCtrl
            .create({
                   title: 'Falha na conexão',
                   buttons: [{ text: 'Estou ciente!' }],
                   subTitle: 'Não foi possível obter a lista de restaurantes. Tente novamente.'
             }).present();
    });
  }

  goToLogin() {
    this.navCtrl.setRoot(LoginPage);
  }

  goToPedidos() {
    this.navCtrl.setRoot(PedidosPage);
  }

}
