import { Component } from '@angular/core';
import { NavController, ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';

declare var cordova: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lastImage: string = null;
  loading: Loading;

  constructor(
    public navCtrl: NavController,
    private camera: Camera,
    private transfer: Transfer,
    private file: File,
    private filePath: FilePath,
    private actionSheetCtrl: ActionSheetController,
    private toastCtrl: ToastController,
    private platform: Platform,
    private loadingCtrl: LoadingController
  ) {

  }

  public presentActionSheet() {
    console.log("entrou no present");
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Selecione uma opção',
      buttons: [
        {
          text: 'Carregar da memória do telefone',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Tirar uma foto',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'cancel',
          role: 'cancel'
        }  
      ]
    });

    actionSheet.present();

  }

  public takePicture(sourceType) {

    // cria as opcoes
    var options = {
      quality: 100,
      sourceType: sourceType,
      savetoPhotoAlbum: false,
      correctOrientation: true
    };

    this.camera.getPicture(options).then((imagePath) => {
      // Se for Android e for para pegar o arquivo da biblioteca de imagens
      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath)
        .then(filePath => {
         let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
         let correctName = imagePath.substr(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
         this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
        });
      } else {
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }

    }, (err) => {
      this.presentToast('Error while selectiong image.');
    });
  }

  private createFileName() {
    var d = new Date();
    var n = d.getTime();
    var newFileName = n + ".jpg";
    return newFileName;
  }

  private copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName)
    .then(sucess => {
      this.lastImage = newFileName;
    },error => {
      this.presentToast('Ocorreu algum erro');
    });
  }

  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text, 
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  private uploadImage() {

  }

  private pathForImage(img) {

  }
}