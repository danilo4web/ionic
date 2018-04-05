webpackJsonp([1],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Usuario; });
var Usuario = /** @class */ (function () {
    function Usuario(id, nome, email, password, status) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.password = password;
        this.status = status;
    }
    return Usuario;
}());

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PedidosPage = /** @class */ (function () {
    function PedidosPage(navCtrl, _http, _loadingCtrl, _alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this._http = _http;
        this._loadingCtrl = _loadingCtrl;
        this._alertCtrl = _alertCtrl;
        this.navParams = navParams;
        console.log(sessionStorage.getItem('usuarioId'));
        this.url = "http://pedidos.localhost/index.php/page/get_ionic_pedidos_json/";
        this.url = this.url + sessionStorage.getItem('usuarioId');
        console.log(this.url);
    }
    PedidosPage.prototype.ngOnInit = function () {
        var _this = this;
        if (sessionStorage.getItem('flagLogado') != "sim") {
            this.goToLogin();
        }
        var loader = this._loadingCtrl.create({
            content: 'Buscando pedidos. Aguarde...'
        });
        loader.present();
        this._http
            .get(this.url)
            .map(function (res) { return res.json(); })
            .toPromise()
            .then(function (pedidos) {
            _this.pedidos = pedidos;
            console.log(_this.pedidos);
            loader.dismiss();
        })
            .catch(function (err) {
            console.log(err);
            loader.dismiss();
            _this._alertCtrl
                .create({
                title: 'Falha na conexão',
                buttons: [{ text: 'OK estou ciente!' }],
                subTitle: "Não foi possÃ­vel obter o cardapio. Tente mais tarde."
            }).present();
        });
    };
    PedidosPage.prototype.goToLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    PedidosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pedidos',template:/*ion-inline-start:"/private/var/www/ohosts/ionic/restaurantes/src/pages/pedidos/pedidos.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>\n        Meus Pedidos\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding id="page2">\n    <ion-list *ngFor="let pedido of pedidos" id="pedidos-list5">\n      <ion-item color="none" id="pedidos-list-item10">\n        <ion-icon name="restaurant" item-left></ion-icon>\n        Número do pedido {‌{ pedido.id }} Valor: R${‌{ pedido.valor }} <br />\n        Taxa de entrega: {‌{ pedido.taxa_entrega }} Prato: {‌{ pedido.cardapio.nome }}\n      </ion-item>\n    </ion-list>\n  </ion-content>'/*ion-inline-end:"/private/var/www/ohosts/ionic/restaurantes/src/pages/pedidos/pedidos.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PedidosPage);
    return PedidosPage;
}());

//# sourceMappingURL=pedidos.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home/home.module": [
		283,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalheDoPedidoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cardapios_cardapios__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carrinho_carrinho__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetalheDoPedidoPage = /** @class */ (function () {
    function DetalheDoPedidoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    DetalheDoPedidoPage_1 = DetalheDoPedidoPage;
    DetalheDoPedidoPage.prototype.goToCardapio = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cardapios_cardapios__["a" /* CardapiosPage */]);
    };
    DetalheDoPedidoPage.prototype.goToCarrinho = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    DetalheDoPedidoPage.prototype.goToDetalheDoPedido = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(DetalheDoPedidoPage_1);
    };
    DetalheDoPedidoPage = DetalheDoPedidoPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalhe-do-pedido',template:/*ion-inline-start:"/private/var/www/ohosts/ionic/restaurantes/src/pages/detalhe-do-pedido/detalhe-do-pedido.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Detalhe do Pedido\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page10">\n  <div id="detalheDoPedido-container3">\n    <ion-list id="detalheDoPedido-list16">\n      <ion-item color="none" on-click="goToCardapio()" id="detalheDoPedido-list-item48">\n        <ion-thumbnail item-left>\n          <img />\n        </ion-thumbnail>\n        <h2>\n          Pizzaria La Minute\n        </h2>\n      </ion-item>\n    </ion-list>\n  </div>\n  <ion-list id="detalheDoPedido-list14">\n    <ion-item-divider color="light" id="detalheDoPedido-list-item-divider2">\n      Pedido: #001 (23/05/2018)\n    </ion-item-divider>\n    <ion-item color="none" id="detalheDoPedido-list-item30">\n      R$ 30,00 - Pizza Calabreza\n    </ion-item>\n    <ion-item color="none" id="detalheDoPedido-list-item28">\n      R$ 5,00 - Coca Cola\n    </ion-item>\n  </ion-list>\n  <ion-list id="detalheDoPedido-list15">\n    <ion-item-divider color="light" id="detalheDoPedido-list-item-divider1"></ion-item-divider>\n    <ion-item color="none" id="detalheDoPedido-list-item29">\n      Taxa de Entrega: R$2,00\n    </ion-item>\n    <ion-item color="none" id="detalheDoPedido-list-item38">\n      Pedido: R$35,00\n    </ion-item>\n    <ion-item color="dark" id="detalheDoPedido-list-item39">\n      Total: R$37,00\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/private/var/www/ohosts/ionic/restaurantes/src/pages/detalhe-do-pedido/detalhe-do-pedido.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], DetalheDoPedidoPage);
    return DetalheDoPedidoPage;
    var DetalheDoPedidoPage_1;
}());

//# sourceMappingURL=detalhe-do-pedido.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinhaContaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cadastro_cadastro__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MinhaContaPage = /** @class */ (function () {
    function MinhaContaPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MinhaContaPage.prototype.goToCadastro = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__cadastro_cadastro__["a" /* CadastroPage */]);
    };
    MinhaContaPage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    MinhaContaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-minha-conta',template:/*ion-inline-start:"/private/var/www/ohosts/ionic/restaurantes/src/pages/minha-conta/minha-conta.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Minha Conta\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3">\n  <form id="minhaConta-form1">\n    <ion-card id="minhaConta-card22">\n      <ion-list>\n        <ion-item color="none" id="minhaConta-list-item42">\n          <ion-avatar item-left>\n            <img />\n          </ion-avatar>\n          <h2>\n            Item\n          </h2>\n        </ion-item>\n        <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n          <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n        </div>\n      </ion-list>\n    </ion-card>\n  </form>\n  <button id="minhaConta-button1" on-click="goToLogin()" ion-button color="positive" block>\n    Login\n  </button>\n  <button id="minhaConta-button5" on-click="goToCadastro()" ion-button color="positive" block>\n    Cadastro\n  </button>\n</ion-content>'/*ion-inline-end:"/private/var/www/ohosts/ionic/restaurantes/src/pages/minha-conta/minha-conta.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], MinhaContaPage);
    return MinhaContaPage;
}());

//# sourceMappingURL=minha-conta.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__restaurantes_restaurantes__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__domain_usuario_usuario__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CadastroPage = /** @class */ (function () {
    function CadastroPage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.data = {};
        this.data.response = '';
        this.http = http;
        this.usuario = new __WEBPACK_IMPORTED_MODULE_4__domain_usuario_usuario__["a" /* Usuario */](null, null, null, null, null);
    }
    CadastroPage.prototype.ngOnInit = function () {
        if (sessionStorage.getItem('flagLogado') == 'sim') {
            this.goToRestaurante();
        }
    };
    CadastroPage.prototype.goToRestaurante = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__restaurantes_restaurantes__["a" /* RestaurantesPage */]);
    };
    CadastroPage.prototype.submit = function () {
        var _this = this;
        var link = 'http://pedidos.localhost/index.php/page/cadastrar_usuario_ionic';
        var data = JSON.stringify({
            nome: this.usuario.nome,
            email: this.usuario.email,
            password: this.usuario.password
        });
        // iniciando a conexao http para cadastro via JSON
        this.http.post(link, data)
            .subscribe(function (data) {
            _this.data.response = data._body;
            var res = _this.data.response.split("|");
            if (res[1] == "sucesso") {
                sessionStorage.setItem('usuarioId', res[0]);
                sessionStorage.setItem('usuarioLogado', _this.usuario.email);
                sessionStorage.setItem('usuarioNome', _this.usuario.nome);
                sessionStorage.setItem('flagLogado', 'sim');
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__restaurantes_restaurantes__["a" /* RestaurantesPage */]);
            }
            else if (_this.data.response == 'invalido') {
                console.log('Invalido!!!');
            }
        }, function (error) {
            console.log('ocorreu algum erro!');
        });
    };
    CadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro',template:/*ion-inline-start:"/private/var/www/ohosts/ionic/restaurantes/src/pages/cadastro/cadastro.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Cadastro\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page6">\n  <form id="cadastro-form2">\n    <ion-list id="cadastro-list3">\n      <ion-item id="cadastro-input3">\n        <ion-label>\n          Nome\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="usuario.nome" name=˜nome˜ placeholder=""></ion-input>\n      </ion-item>\n      <ion-item id="cadastro-input4">\n        <ion-label>\n          Email\n        </ion-label>\n        <ion-input type="email" [(ngModel)]="usuario.email" name=˜email˜  placeholder=""></ion-input>\n      </ion-item>\n      <ion-item id="cadastro-input5">\n        <ion-label>\n          Password\n        </ion-label>\n        <ion-input type="password" [(ngModel)]="usuario.password" name=˜password˜  placeholder=""></ion-input>\n      </ion-item>\n    </ion-list>\n    <button id="cadastro-button3" (click)="submit()" ion-button color="stable" block>\n      Cadastro\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"/private/var/www/ohosts/ionic/restaurantes/src/pages/cadastro/cadastro.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], CadastroPage);
    return CadastroPage;
}());

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedesSociaisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RedesSociaisPage = /** @class */ (function () {
    function RedesSociaisPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RedesSociaisPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-redes-sociais',template:/*ion-inline-start:"/private/var/www/ohosts/ionic/restaurantes/src/pages/redes-sociais/redes-sociais.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Redes Sociais\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page5">\n  <ion-list id="redesSociais-list9">\n    <ion-item color="none" id="redesSociais-list-item5">\n      <ion-thumbnail item-left>\n        <img />\n      </ion-thumbnail>\n      <h2>\n        Facebook\n      </h2>\n    </ion-item>\n    <ion-item color="none" id="redesSociais-list-item6">\n      <ion-thumbnail item-left>\n        <img />\n      </ion-thumbnail>\n      <h2>\n        Instagram\n      </h2>\n    </ion-item>\n    <ion-item color="none" id="redesSociais-list-item7">\n      <ion-thumbnail item-left>\n        <img />\n      </ion-thumbnail>\n      <h2>\n        LInkedin\n      </h2>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/private/var/www/ohosts/ionic/restaurantes/src/pages/redes-sociais/redes-sociais.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], RedesSociaisPage);
    return RedesSociaisPage;
}());

//# sourceMappingURL=redes-sociais.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SobrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SobrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SobrePage = /** @class */ (function () {
    function SobrePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SobrePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SobrePage');
    };
    SobrePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sobre',template:/*ion-inline-start:"/private/var/www/ohosts/ionic/restaurantes/src/pages/sobre/sobre.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>\n        Sobre\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding id="page9">\n      Aplicativo de Delivery, aqui você encontra a melhor comida da sua cidade.\n  </ion-content>'/*ion-inline-end:"/private/var/www/ohosts/ionic/restaurantes/src/pages/sobre/sobre.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SobrePage);
    return SobrePage;
}());

//# sourceMappingURL=sobre.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_restaurantes_restaurantes__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_pedidos_pedidos__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_minha_conta_minha_conta__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_redes_sociais_redes_sociais__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_detalhe_do_pedido_detalhe_do_pedido__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_carrinho_carrinho__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_cardapios_cardapios__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_cadastro_cadastro__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_sobre_sobre__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_map__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_toPromise__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_restaurantes_restaurantes__["a" /* RestaurantesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_redes_sociais_redes_sociais__["a" /* RedesSociaisPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_pedidos_pedidos__["a" /* PedidosPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_detalhe_do_pedido_detalhe_do_pedido__["a" /* DetalheDoPedidoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_carrinho_carrinho__["a" /* CarrinhoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_cardapios_cardapios__["a" /* CardapiosPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_minha_conta_minha_conta__["a" /* MinhaContaPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_cadastro_cadastro__["a" /* CadastroPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_sobre_sobre__["a" /* SobrePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_restaurantes_restaurantes__["a" /* RestaurantesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_pedidos_pedidos__["a" /* PedidosPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_minha_conta_minha_conta__["a" /* MinhaContaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_redes_sociais_redes_sociais__["a" /* RedesSociaisPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_detalhe_do_pedido_detalhe_do_pedido__["a" /* DetalheDoPedidoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_carrinho_carrinho__["a" /* CarrinhoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_cardapios_cardapios__["a" /* CardapiosPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_cadastro_cadastro__["a" /* CadastroPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_sobre_sobre__["a" /* SobrePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_cardapios_cardapios__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_carrinho_carrinho__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_detalhe_do_pedido_detalhe_do_pedido__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_minha_conta_minha_conta__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_pedidos_pedidos__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_redes_sociais_redes_sociais__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_restaurantes_restaurantes__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_sobre_sobre__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_restaurantes_restaurantes__["a" /* RestaurantesPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.goToRestaurantes = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_restaurantes_restaurantes__["a" /* RestaurantesPage */]);
    };
    MyApp.prototype.goToCardapio = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_cardapios_cardapios__["a" /* CardapiosPage */]);
    };
    MyApp.prototype.goToCarrinho = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    MyApp.prototype.goToDetalheDoPedido = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_detalhe_do_pedido_detalhe_do_pedido__["a" /* DetalheDoPedidoPage */]);
    };
    MyApp.prototype.goToMinhaConta = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_minha_conta_minha_conta__["a" /* MinhaContaPage */]);
    };
    MyApp.prototype.goToPedidos = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_pedidos_pedidos__["a" /* PedidosPage */]);
    };
    MyApp.prototype.goToRedesSociais = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_redes_sociais_redes_sociais__["a" /* RedesSociaisPage */]);
    };
    MyApp.prototype.goToSobre = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_sobre_sobre__["a" /* SobrePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/private/var/www/ohosts/ionic/restaurantes/src/app/app.html"*/'<ion-menu [content]="mainContent">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>\n          Menu\n        </ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content id="side-menu21">\n      <ion-list id="menu-list1">\n        <ion-item color="none" menuClose="" on-click="goToRestaurantes()" id="menu-list-item1">\n          <ion-icon name="restaurant"></ion-icon>\n          Restaurantes\n        </ion-item>\n        <ion-item color="none" menuClose="" on-click="goToPedidos()" id="menu-list-item2">\n          <ion-icon name="reorder"></ion-icon>\n          Pedidos\n        </ion-item>\n        <ion-item color="none" menuClose="" on-click="goToMinhaConta()" id="menu-list-item3">\n          <ion-icon name="person"></ion-icon>\n          Minha conta\n        </ion-item>\n        <ion-item color="none" menuClose="" on-click="goToRedesSociais()" id="menu-list-item4">\n          <ion-icon name="logo-linkedin"></ion-icon>\n          Redes sociais\n        </ion-item>\n        <ion-item color="none" menuClose="" on-click="goToSobre()" id="menu-list-item5">\n            <ion-icon name="information-circle"></ion-icon>\n          Sobre\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  \n  <ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"/private/var/www/ohosts/ionic/restaurantes/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pedido; });
var Pedido = /** @class */ (function () {
    function Pedido(id, cardapio, usuario, valor, taxa_entrega, nome, email, observacao) {
        this.id = id;
        this.cardapio = cardapio;
        this.usuario = usuario;
        this.valor = valor;
        this.taxa_entrega = taxa_entrega;
        this.nome = nome;
        this.email = email;
        this.observacao = observacao;
    }
    return Pedido;
}());

//# sourceMappingURL=pedido.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardapiosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carrinho_carrinho__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CardapiosPage = /** @class */ (function () {
    function CardapiosPage(navCtrl, _http, _loadingCtrl, _alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this._http = _http;
        this._loadingCtrl = _loadingCtrl;
        this._alertCtrl = _alertCtrl;
        this.navParams = navParams;
        this.restaurante = this.navParams.get('RestauranteSelecionado');
        console.log(this.restaurante);
        this.url = "http://pedidos.localhost/index.php/page/get_ionic_cardapio_json/" + this.restaurante.id;
    }
    CardapiosPage.prototype.ngOnInit = function () {
        var _this = this;
        var loader = this._loadingCtrl.create({
            content: 'Buscando cardápio. Aguarde...'
        });
        loader.present();
        this._http
            .get(this.url)
            .map(function (res) { return res.json(); })
            .toPromise()
            .then(function (cardapios) {
            _this.cardapios = cardapios;
            loader.dismiss();
        })
            .catch(function (err) {
            console.log(err);
            loader.dismiss();
            _this._alertCtrl
                .create({
                title: "Falha na Conexão!",
                buttons: [{ text: 'OK, Estou ciente' }],
                subTitle: "Não foi possível obter o cardápio"
            }).present();
        });
    };
    CardapiosPage.prototype.seleciona = function (cardapio) {
        console.log("Cardapio - seleciona");
        console.log(cardapio);
        console.log("===================");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__carrinho_carrinho__["a" /* CarrinhoPage */], { CardapioSelecionado: cardapio });
    };
    CardapiosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cardapios',template:/*ion-inline-start:"/private/var/www/ohosts/ionic/restaurantes/src/pages/cardapios/cardapios.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>\n        Cardápio\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding id="page1">\n    <ion-card *ngFor=\'let cardapio of cardapios\' id="restaurantes-card21" (click)="seleciona(cardapio)">\n      <ion-list>\n        <ion-item color="none" id="restaurantes-list-item7">\n        </ion-item>\n        <ion-item id="restaurantes-list-item-container2">\n          <div id="restaurantes-markdown2" class="show-list-numbers-and-dots">\n            <p style="margin-top:0px;color:#000000;">\n              <strong>\n                {{ cardapio.nome }} - R${{ cardapio.preco }},00\n              </strong>\n            </p>\n          </div>\n        </ion-item>\n        <ion-item color="assertive" id="restaurantes-list-item8">\n          <ion-icon name="restaurant" item-left></ion-icon>\n          {{ cardapio.ingredientes }}\n        </ion-item>\n        <ion-item color="assertive" id="restaurantes-list-item8">\n          <button id="cardapio-button3" ion-button color="stable" block>\n              Fazer Pedido\n            </button> \n        </ion-item>\n      </ion-list>\n     \n    </ion-card>\n  </ion-content>'/*ion-inline-end:"/private/var/www/ohosts/ionic/restaurantes/src/pages/cardapios/cardapios.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CardapiosPage);
    return CardapiosPage;
}());

//# sourceMappingURL=cardapios.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrinhoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pedidos_pedidos__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__domain_pedido_pedido__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__domain_usuario_usuario__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CarrinhoPage = /** @class */ (function () {
    function CarrinhoPage(navCtrl, _alertCtrl, http, navParams) {
        this.navCtrl = navCtrl;
        this._alertCtrl = _alertCtrl;
        this.navParams = navParams;
        this.pedido = new __WEBPACK_IMPORTED_MODULE_5__domain_pedido_pedido__["a" /* Pedido */](null, null, null, null, null, null, null, null);
        this.pedido.usuario = new __WEBPACK_IMPORTED_MODULE_6__domain_usuario_usuario__["a" /* Usuario */](sessionStorage.getItem('usuarioId'), sessionStorage.getItem('usuarioNome'), sessionStorage.getItem('usuarioLogado'), null, sessionStorage.getItem('flagLogado'));
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
    CarrinhoPage.prototype.ngOnInit = function () {
        if (sessionStorage.getItem('flagLogado') != 'sim') {
            this.goToLogin();
        }
    };
    CarrinhoPage.prototype.submit = function () {
        var _this = this;
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
            .subscribe(function (data) {
            _this.data.response = data._body;
            _this._alertCtrl
                .create({
                title: 'Sucesso',
                buttons: [{ text: 'OK' }],
                subTitle: _this.data.response
            }).present();
            _this.goToPedidos();
        }, function (error) {
            console.log("Oooops!");
            _this._alertCtrl
                .create({
                title: 'Falha na conexão',
                buttons: [{ text: 'Estou ciente!' }],
                subTitle: 'Não foi possível obter a lista de restaurantes. Tente novamente.'
            }).present();
        });
    };
    CarrinhoPage.prototype.goToLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    CarrinhoPage.prototype.goToPedidos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pedidos_pedidos__["a" /* PedidosPage */]);
    };
    CarrinhoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-carrinho',template:/*ion-inline-start:"/private/var/www/ohosts/ionic/restaurantes/src/pages/carrinho/carrinho.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Meu Pedido\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page1">\n  <ion-card id="restaurantes-card21">\n    <ion-list>\n      <ion-item color="none" id="restaurantes-list-item7">\n      </ion-item>\n      <ion-item id="restaurantes-list-item-container2">\n        <div id="restaurantes-markdown2" class="show-list-numbers-and-dots">\n          <p style="margin-top:0px;color:#000000;">\n            <strong>\n              {{ pedido.cardapio.nome }} - R${{ pedido.cardapio.preco }},00\n            </strong>\n          </p>\n        </div>\n      </ion-item>\n      <ion-item color="assertive" id="restaurantes-list-item8">\n        <ion-icon name="restaurant" item-left></ion-icon>\n        {{ pedido.cardapio.ingredientes }}\n      </ion-item>\n\n    </ion-list>\n   \n  </ion-card>\n\n  <form id="cadastro-form1">\n      \n      <ion-item>\n        <ion-label>Observação</ion-label>\n        <ion-input type="text" [(ngModel)]="pedido.observacao" name="observacao"></ion-input>\n      </ion-item>\n\n      <ion-item color="assertive" id="restaurantes-list-item7">\n        <button id="cardapio-button3" (click)="submit()" ion-button color="stable" block>\n            Confirmar Pedido\n        </button>\n      </ion-item>\n  </form>\n\n</ion-content>'/*ion-inline-end:"/private/var/www/ohosts/ionic/restaurantes/src/pages/carrinho/carrinho.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CarrinhoPage);
    return CarrinhoPage;
}());

//# sourceMappingURL=carrinho.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__domain_usuario_usuario__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__restaurantes_restaurantes__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.data = {};
        this.data.response = '';
        this.http = http;
        this.usuario = new __WEBPACK_IMPORTED_MODULE_3__domain_usuario_usuario__["a" /* Usuario */](null, null, null, null, null);
    }
    LoginPage.prototype.ngOnInit = function () {
        if (sessionStorage.getItem('flagLogado') == 'sim') {
            this.goToRestaurante();
        }
    };
    LoginPage.prototype.goToRestaurante = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__restaurantes_restaurantes__["a" /* RestaurantesPage */]);
    };
    LoginPage.prototype.submit = function () {
        var _this = this;
        var link = 'http://pedidos.localhost/index.php/page/login_ionic';
        console.log(this.usuario.email);
        console.log(this.usuario.password);
        var data = JSON.stringify({ email: this.usuario.email, password: this.usuario.password });
        // Iniciando a conexão HTTP para cadastro via JSON
        this.http.post(link, data)
            .subscribe(function (data) {
            _this.data.response = data._body;
            var res = _this.data.response.split("|");
            if (res[1] == "sucesso") {
                sessionStorage.setItem('usuarioId', res[0].trim());
                sessionStorage.setItem('usuarioLogado', _this.usuario.email.trim());
                sessionStorage.setItem('usuarioNome', res[2].trim());
                sessionStorage.setItem('flagLogado', 'sim');
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__restaurantes_restaurantes__["a" /* RestaurantesPage */]);
            }
            else if (_this.data.response == 'invalido') {
                console.log('Invalido!!!');
            }
        }, function (error) {
            console.log('Ocorreu algum erro!');
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/private/var/www/ohosts/ionic/restaurantes/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page6">\n  <form id="login-form2">\n    <ion-item id="login-input5">\n      <ion-label>E-mail</ion-label><ion-input type="text" [(ngModel)]="usuario.email" name="email" placeholder=""></ion-input>\n    </ion-item>\n    <ion-item id="login-input6">\n      <ion-label>Senha</ion-label><ion-input type="password" [(ngModel)]="usuario.password" name="password" placeholder=""></ion-input>\n    </ion-item>\n  </form>\n  <button id="login-button2" ion-button color="positive" block (click)="submit()">\n    Fazer Login\n  </button>\n</ion-content>'/*ion-inline-end:"/private/var/www/ohosts/ionic/restaurantes/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cardapios_cardapios__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RestaurantesPage = /** @class */ (function () {
    function RestaurantesPage(navCtrl, _http, _loadingCtrl, _alertCtrl) {
        this.navCtrl = navCtrl;
        this._http = _http;
        this._loadingCtrl = _loadingCtrl;
        this._alertCtrl = _alertCtrl;
    }
    RestaurantesPage.prototype.ngOnInit = function () {
        var _this = this;
        var loader = this._loadingCtrl.create({
            content: 'Listando restaurantes. Aguarde ...'
        });
        loader.present();
        this._http
            .get('http://pedidos.localhost/index.php/page/get_ionic')
            .map(function (res) { return res.json(); })
            .toPromise()
            .then(function (restaurates) {
            _this.restaurantes = restaurates;
            loader.dismiss();
        })
            .catch(function (err) {
            console.log(err);
            _this._alertCtrl
                .create({
                title: 'Falha na conexão',
                buttons: [{ text: 'Estou ciente!' }],
                subTitle: 'Não foi possível obter a lista de restaurantes. Tente novamente.'
            }).present();
        });
    };
    RestaurantesPage.prototype.seleciona = function (restaurante) {
        console.log("Restaurante - seleciona");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cardapios_cardapios__["a" /* CardapiosPage */], { RestauranteSelecionado: restaurante });
    };
    RestaurantesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-restaurantes',template:/*ion-inline-start:"/private/var/www/ohosts/ionic/restaurantes/src/pages/restaurantes/restaurantes.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>\n        Restaurantes\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding id="page1">\n    <ion-card *ngFor=\'let restaurante of restaurantes\' id="restaurantes-card21" (click)="seleciona(restaurante)">\n      <ion-list>\n        <ion-item color="none" id="restaurantes-list-item7">\n        </ion-item>\n  \n        <!--\n        <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n          <img src="{{ restaurante.imgurl }} " />\n        </div>\n        -->\n\n        <ion-item id="restaurantes-list-item-container2">\n          <div id="restaurantes-markdown2" class="show-list-numbers-and-dots">\n            <p style="margin-top:0px;color:#000000;">\n              <strong>\n                {{ restaurante.telefone }}\n              </strong>\n            </p>\n          </div>\n        </ion-item>\n        <ion-item color="assertive" id="restaurantes-list-item8">\n          <ion-icon name="restaurant" item-left></ion-icon>\n          {{ restaurante.nome }}\n        </ion-item>\n      </ion-list>\n    </ion-card>\n  </ion-content>'/*ion-inline-end:"/private/var/www/ohosts/ionic/restaurantes/src/pages/restaurantes/restaurantes.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RestaurantesPage);
    return RestaurantesPage;
}());

//# sourceMappingURL=restaurantes.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map