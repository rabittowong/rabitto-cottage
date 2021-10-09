import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { ShikiModel } from '../model/shiki.model';
import { ShikiService } from '../service/shiki.service';

@Injectable()
export class ResolveShikiAll implements Resolve<ShikiModel[]> {
  constructor(private shikiService: ShikiService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<ShikiModel[]> {
    return this.shikiService.findAll();
  }
}
