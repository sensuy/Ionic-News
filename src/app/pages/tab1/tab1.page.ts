import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { RespuestaTopHeadlines } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(
    private noticiasServices: NoticiasService
  ) { }

  ngOnInit() {
    this.noticiasServices.getTopHeadLines()
      .subscribe(resp => {
        console.log('noticias: ', resp);
      });
  }

}
