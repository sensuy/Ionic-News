import { Article } from './../interfaces/interfaces';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  noticias: Article[] = [];

  constructor(
    private storage: Storage
  ) {
    this.cargarFavoritos();
  }

  guardarNoticia(noticia: Article) {

    const existe = this.noticias.find(noti => noti.title === noticia.title);
    if (!existe) {
      this.noticias.unshift(noticia);
      this.storage.set('favoritos', this.noticias);
      return;
    }
    alert('Noticia já foi salva!');

  }

  async cargarFavoritos() {
    const favoritos = await this.storage.get('favoritos');
    console.log('async await : ', favoritos);
    if (favoritos) {
      this.noticias = favoritos;
    }
  }

  borrarNoticia(noticia: Article) {
    this.noticias = this.noticias.filter(noti => noti.title !== noticia.title);
    this.storage.set('favoritos', this.noticias);
  }
}
