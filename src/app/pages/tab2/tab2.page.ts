import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegmentButton, IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  @ViewChild(IonSegment, { static: true }) segment: IonSegment;

  categorias = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];

  constructor() {

  }

  ngOnInit() {
    this.segment.value = this.categorias[0];
  }

}
