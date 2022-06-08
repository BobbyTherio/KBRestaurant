import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  test:any;

  constructor(private service:UserService, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.test = this.service.isAuthenticated()
  }

  logout(){
    localStorage.removeItem("currentUser");
    
    this.router.navigate(['home'])
      setTimeout(() => {

        window.location.reload()
        console.log('Timer')
      }, 10)
  }
}
