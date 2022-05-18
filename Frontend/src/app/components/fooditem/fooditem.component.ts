import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { KBFood } from 'src/app/interfaces/food';

@Component({
  selector: 'app-fooditem',
  templateUrl: './fooditem.component.html',
  styleUrls: ['./fooditem.component.scss']
})
export class FooditemComponent implements OnInit {

   @Input() fooditem!: KBFood;
  
   
  constructor() { }

  ngOnInit(): void {
  }

}
