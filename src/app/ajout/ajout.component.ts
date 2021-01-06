import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { BiblioService } from '../biblio.service';
import { Livre } from '../livre'


@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {

  edit = false;

  l : Livre ;

  constructor(public biblio: BiblioService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.l = new Livre();
    this.edit = false;
    // const id = this.route.snapshot.params.id;
    this.route.paramMap.subscribe(params => {
      const id = params.get('titre');
      if (id !== null) {
        console.log(id);
        this.edit = true;
        this.biblio.getSinglePerson(id).subscribe((response) => {
            this.l = response;
          }, (error) => {
          console.log('Erreur mise à jour');
          console.log(error);
        });
      }
    });
  }

  onSubmit() {
    if (this.edit) {
      console.log('edit livre ' + this.l.titre);
      this.biblio.updateOnServer(this.l.titre, this.l);
    } else {
      console.log('add livre ' + this.l.titre);
      this.biblio.addToServer(this.l);
    }
    this.router.navigate(['/list']);
  }

}
