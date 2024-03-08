// Importez le Router si vous n'avez pas déjà importé
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  creerTableau() {
    // Implémentez ici la logique pour créer un nouveau tableau
    // Par exemple, naviguer vers une autre page où le tableau peut être créé
    this.router.navigate(['/nouveau-tableau']); // Remplacez '/nouveau-tableau' par le chemin de votre nouvelle page
  }

}
