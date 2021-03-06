import { Article } from './../../interfaces/interfaces';
import { Component, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  @ViewChild(IonSegment, { static: true }) segment: IonSegment;

  categorias = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];
  noticias: Article[] = [];

  constructor(
    private noticiasService: NoticiasService
  ) {

  }
  ionViewWillEnter() {
    this.segment.value = this.categorias[0];

    this.cargarNoticias(this.categorias[0]);

  }

  cambioCategoria(event) {
    this.noticias = [];
    console.log('event: ', event.detail.value);
    this.cargarNoticias(event.detail.value);
  }

  cargarNoticias(categoria: string, event?) {

    console.log('this.segment.value: ', this.segment.value);
    this.noticiasService.getTopHeadLinesCategoria(categoria)
      .subscribe(resp => {
        console.log('resp: ', resp);
        this.noticias.push(...resp.articles);
      });

    if (event) {
      event.target.complete();
    }

  }

  loadData(event) {
    this.cargarNoticias(this.segment.value, event);
  }

}
