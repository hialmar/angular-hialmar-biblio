import { Component } from '@angular/core';
import {Router} from '@angular/router';

import { BiblioService } from './biblio.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor(public biblio: BiblioService,
  private router: Router) {

  }


}
