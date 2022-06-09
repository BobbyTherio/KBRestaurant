import { Component, Input, OnInit } from '@angular/core';
import { KBFood } from 'src/app/interfaces/food';

@Component({
  selector: 'app-breakfasts',
  templateUrl: './breakfasts.component.html',
  styleUrls: ['./breakfasts.component.scss']
})
export class BreakfastsComponent implements OnInit {

  @Input() breakfasts!: KBFood;
  
  constructor() { }

  ngOnInit(): void {
  }

}
