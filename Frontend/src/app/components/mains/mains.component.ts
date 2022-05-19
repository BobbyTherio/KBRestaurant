import { Component, Input, OnInit } from '@angular/core';
import { KBFood } from 'src/app/interfaces/food';

@Component({
  selector: 'app-mains',
  templateUrl: './mains.component.html',
  styleUrls: ['./mains.component.scss']
})
export class MainsComponent implements OnInit {

  @Input() mains!: KBFood;

  constructor() { }

  ngOnInit(): void {
  }

}
