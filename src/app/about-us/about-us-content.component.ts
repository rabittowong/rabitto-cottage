import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ShikiModel } from '../model/shiki.model';

@Component({
  templateUrl: './about-us-content.component.html',
  styleUrls: ['./about-us-content.component.scss'],
})
export class AboutUsContentComponent implements OnInit {
  shikis: ShikiModel[];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const shikiData = (this.activatedRoute.snapshot.data['shikis'] as ShikiModel[]) || [];
    this.shikis = shikiData.sort((a, b) => a.order - b.order);
  }
}
