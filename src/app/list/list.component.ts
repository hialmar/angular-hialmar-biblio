import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { BiblioService } from '../biblio.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public biblio: BiblioService,
  private router: Router) {

  }

  ngOnInit() {
  }

  ajoutLivre() {
    this.router.navigate(['/list', 'add']);
  }

  editLivre(titre: string) {
    this.router.navigate(['/list', 'view', titre]);
  }

  removeLivre(titre: string) {
    this.biblio.removeFromServer(titre);
  }
}
