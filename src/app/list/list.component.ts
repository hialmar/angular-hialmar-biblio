import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { BiblioService } from "../biblio.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  searchText = "";

  constructor(public biblio: BiblioService, private router: Router) {}

  ngOnInit(): void {}

  ajoutLivre(): void {
    this.router.navigate(["/list", "add"]);
  }

  editLivre(titre: string): void {
    this.router.navigate(["/list", "view", titre]);
  }

  removeLivre(titre: string): void {
    this.biblio.removeFromServer(titre);
  }
}
