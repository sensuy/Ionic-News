import { Article } from './../../interfaces/interfaces';
import { Component, OnInit, Input } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DataLocalService } from 'src/app/services/data-local.service';




@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() noticia: Article;
  @Input() indice: number;
  @Input() enFavoritos;

  constructor(
    private iab: InAppBrowser,
    private actionSheetCtrl: ActionSheetController,
    private socialSharing: SocialSharing,
    private datalocalService: DataLocalService
  ) { }

  ngOnInit() {
    console.log('Favoritos: ', this.enFavoritos);

  }


  abrirNoticia() {
    console.log('Noticia: ', this.noticia.url);
    const browser = this.iab.create(this.noticia.url);
    console.log('browser: ', browser);
  }

  async lanzarMenu() {

    let guardarBorrarBtn;

    if (this.enFavoritos) {
      // borrar de favoritos
      guardarBorrarBtn = {
        text: 'Borrar Favorito',
        icon: 'trash-outline',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Borrar de favorito');
          this.datalocalService.borrarNoticia(this.noticia);
        }
      };

    } else {
      guardarBorrarBtn = {
        text: 'Favorito',
        icon: 'star-outline',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Favorito');
          this.datalocalService.guardarNoticia(this.noticia);
        }
      };
    }

    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Compartir',
          icon: 'share-social-outline',
          cssClass: 'action-dark',
          handler: () => {
            console.log('Compartir clicked');
            this.socialSharing.share(
              this.noticia.title,
              this.noticia.source.name,
              '',
              this.noticia.url
            );
          }
        },
        guardarBorrarBtn,
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
