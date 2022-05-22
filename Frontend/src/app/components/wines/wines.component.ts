import { Component, Input, OnInit } from '@angular/core';
import { KBDrink } from 'src/app/interfaces/drink';

@Component({
  selector: 'app-wines',
  templateUrl: './wines.component.html',
  styleUrls: ['./wines.component.scss']
})
export class WinesComponent implements OnInit {

  @Input() wines!: KBDrink;
  
  constructor() { }

  ngOnInit(): void {
  }

}
