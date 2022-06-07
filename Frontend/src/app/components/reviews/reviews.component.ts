import { Component, Input, OnInit } from '@angular/core';
import { Reviews } from 'src/app/interfaces/reviews';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  @Input() reviews!: Reviews;

  constructor() { }

  ngOnInit(): void {
  }

}
