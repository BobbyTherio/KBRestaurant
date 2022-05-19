import { Component, Input, OnInit } from '@angular/core';
import { KBDrink } from 'src/app/interfaces/drink';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.scss']
})
export class CocktailsComponent implements OnInit {

  @Input() cocktails!:KBDrink;
  
  constructor() { }

  ngOnInit(): void {
  }

}
