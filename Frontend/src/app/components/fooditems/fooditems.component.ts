import { Component, Input, OnInit } from '@angular/core';
import { KBFood } from 'src/app/interfaces/food';

@Component({
  selector: 'app-fooditems',
  templateUrl: './fooditems.component.html',
  styleUrls: ['./fooditems.component.scss']
})
export class FooditemsComponent implements OnInit {
  @Input() fooditems!: KBFood;
  constructor() { }

  ngOnInit(): void {
  }

}
