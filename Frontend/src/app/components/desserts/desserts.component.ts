import { Component, Input, OnInit } from '@angular/core';
import { KBFood } from 'src/app/interfaces/food';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.scss']
})
export class DessertsComponent implements OnInit {

  @Input() desserts!: KBFood;
  test:any;
  constructor(
    private service:UserService,
  ) { 

  }

  ngOnInit(): void {
    this.test = this.service.isAuthenticated()
  }

}
