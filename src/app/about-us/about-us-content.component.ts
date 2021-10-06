import { Component } from '@angular/core';

import { shikiData } from '../data/shiki.data';
import { ShikiModel } from '../model/shiki.model';

@Component({
  templateUrl: './about-us-content.component.html',
  styleUrls: ['./about-us-content.component.scss'],
})
export class AboutUsContentComponent {
  shikis: ShikiModel[] = shikiData;

  constructor() {
  }
}
