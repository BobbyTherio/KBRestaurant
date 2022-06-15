import { Component, Input, OnInit } from '@angular/core';
import { KBFood } from 'src/app/interfaces/food';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-breakfasts',
  templateUrl: './breakfasts.component.html',
  styleUrls: ['./breakfasts.component.scss']
})
export class BreakfastsComponent implements OnInit {

  @Input() breakfasts!: KBFood;
  test:any;

  constructor(
    private service:UserService,
  ) {

   }

  ngOnInit(): void {
    this.test = this.service.isAuthenticated()
  }

}
