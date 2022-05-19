import { Component, Input, OnInit } from '@angular/core';
import { KBFood } from 'src/app/interfaces/food';

@Component({
  selector: 'app-appetizers',
  templateUrl: './appetizers.component.html',
  styleUrls: ['./appetizers.component.scss']
})
export class AppetizersComponent implements OnInit {

  @Input() appetizers!: KBFood;

  constructor() { }

  ngOnInit(): void {
  }

}
