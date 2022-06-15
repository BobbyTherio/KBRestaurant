import { Component, Input, OnInit } from '@angular/core';
import { KBFood } from 'src/app/interfaces/food';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mains',
  templateUrl: './mains.component.html',
  styleUrls: ['./mains.component.scss']
})
export class MainsComponent implements OnInit {

  @Input() mains!: KBFood;
  test:any;

  constructor(
    private service:UserService,
  ) { 

  }

  ngOnInit(): void {
    this.test = this.service.isAuthenticated()
  }

}
