import { Article } from './../../interfaces/interfaces';
import { Component, OnInit, Input } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() noticia: Article;
  @Input() indice: number;

  constructor(
    private iab: InAppBrowser,
    private actionSheetCtrl: ActionSheetController
  ) { }

  ngOnInit() { }


  abrirNoticia() {
    console.log('Noticia: ', this.noticia.url);
    const browser = this.iab.create(this.noticia.url);
    console.log('browser: ', browser);
  }

  async lanzarMenu() {
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Compartir',
          icon: 'share-social-outline',
          cssClass: 'action-dark',
          handler: () => {
            console.log('Compartir clicked');
          }
        },
        {
          text: 'Favorito',
          icon: 'star-outline',
          cssClass: 'action-dark',
          handler: () => {
            console.log('Favorito');
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          cssClass: 'action-dark',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await actionSheet.present();

  }
}
