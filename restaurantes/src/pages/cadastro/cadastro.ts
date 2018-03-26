import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

import { RestaurantesPage } from '../restaurantes/restaurantes';

import { Usuario } from '../../domain/usuario/usuario';
import { Cardapio } from '../../domain/cardapio/cardapio';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html'
})
export class CadastroPage {

  public data;
  public http;
  public usuario: Usuario;
  
  constructor(public navCtrl: NavController, http: Http ) {
      this.data = {};
      this.data.response = '';
      this.http = http;
      this.usuario = new Usuario(null, null, null, null, null);
  }

  ngOnInit() {
    if(sessionStorage.getItem('flagLogado') == 'sim') {
      this.goToRestaurante();
    }
  }  

  goToRestaurante() {
    this.navCtrl.setRoot(RestaurantesPage);
  }  
  
  submit(){
    var link = 'http://pedidos.localhost/index.php/page/cadastrar_usuario_ionic';

    var data = JSON.stringify({
      nome: this.usuario.nome, 
      email: this.usuario.email, 
      password: this.usuario.password
    });

    // iniciando a conexao http para cadastro via JSON
    this.http.post(link, data)
      .subscribe(data => {
        this.data.response = data._body;
        var res = this.data.response.split("|");

        if(res[1] == "sucesso"){
          sessionStorage.setItem('usuarioId', res[0]);
          sessionStorage.setItem('usuarioLogado', this.usuario.email);
          sessionStorage.setItem('usuarioNome', this.usuario.nome);
          sessionStorage.setItem('flagLogado', 'sim');
          
          this.navCtrl.push(RestaurantesPage)
        } else if(this.data.response == 'invalido') {
          console.log('Invalido!!!');
        }
      }, error => {
        console.log('ocorreu algum erro!');
      });
  }
}