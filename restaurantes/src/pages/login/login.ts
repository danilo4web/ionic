import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';

import { Usuario } from '../../domain/usuario/usuario';
import { MinhaContaPage } from '../minha-conta/minha-conta';
import { RestaurantesPage } from '../restaurantes/restaurantes';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public data;
  public http;
  public usuario: Usuario;
  public usuarioLogado: Usuario;
    
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
    var link = 'http://pedidos.localhost/index.php/page/login_ionic';


    console.log(this.usuario.email);
    console.log(this.usuario.password);

    var data = JSON.stringify({ email: this.usuario.email, password: this.usuario.password });
    
    // Iniciando a conexão HTTP para cadastro via JSON
    this.http.post(link, data)
      .subscribe( data => {

        this.data.response = data._body;
        var res = this.data.response.split("|");

        if(res[1] == "sucesso"){
          sessionStorage.setItem('usuarioId', res[0].trim());
          sessionStorage.setItem('usuarioLogado', this.usuario.email.trim());
          sessionStorage.setItem('usuarioNome', res[2].trim());
          sessionStorage.setItem('flagLogado', 'sim');
          
          this.navCtrl.push(RestaurantesPage)
        } else if(this.data.response == 'invalido') {
          console.log('Invalido!!!');
        }

      }, error =>{
        console.log('Ocorreu algum erro!');
      });    
  }
}
