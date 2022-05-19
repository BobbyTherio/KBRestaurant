import { Component, Input, OnInit } from '@angular/core';
import { KBDrink } from 'src/app/interfaces/drink';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {

  @Input() beers!: KBDrink;
  
  constructor() { }

  ngOnInit(): void {
  }

}
