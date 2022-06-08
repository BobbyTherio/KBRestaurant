import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm;

  constructor(private service: UserService, private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  login() {
    let formData = this.loginForm.value;
    this.service.login(formData).subscribe((result) => {
      localStorage.setItem('currentUser', JSON.stringify(result));


      this.router.navigate(['edit'])
      setTimeout(() => {

        window.location.reload()
        console.log('Timer')
      }, 10)


    }, (err) => {
      alert('Incorrect username or password');
      console.log(err);
    });
  }

}
