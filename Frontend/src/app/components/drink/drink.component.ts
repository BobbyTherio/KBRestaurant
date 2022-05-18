import { Component, Input, OnInit } from '@angular/core';
import { KBDrink } from 'src/app/interfaces/drink';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss']
})
export class DrinkComponent implements OnInit {

  @Input() drink!: KBDrink;
  
  constructor() { }

  ngOnInit(): void {
  }

}
