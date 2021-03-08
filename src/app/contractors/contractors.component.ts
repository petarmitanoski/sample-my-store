import { Component, OnInit } from '@angular/core';

class Contractor {
  name: string;
  location: string;
  rating: string;
  competences: string[];
}

@Component({
  selector: 'app-contractors',
  templateUrl: './contractors.component.html',
  styleUrls: ['./contractors.component.css']
})
export class ContractorsComponent implements OnInit {

  public items: Contractor[] = [];

  constructor() { }

  ngOnInit(): void {

    this.items = [
      {
        name: "Eden",
        location: "Skopje",
        rating: "5",
        competences: [
          "electrician"
        ]
      },
      {
        name: "Dva",
        location: "Skopje",
        rating: "5",
        competences: [
          "electrician",
          "tiler"
        ]
      },
      {
        name: "Tri",
        location: "Skopje",
        rating: "5",
        competences: [
          "electrician"
        ]
      },
      {
        name: "Cetiri",
        location: "Skopje",
        rating: "5",
        competences: [
          "tiler"
        ]
      },
      {
        name: "Pet",
        location: "Skopje",
        rating: "5",
        competences: [
          "electrician"
        ]
      }
    ];
  }

}
