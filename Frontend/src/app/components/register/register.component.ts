import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm;

  constructor(private service:UserService, private formBuilder: FormBuilder) {
    this.registerForm = formBuilder.group({
      username: ['', [Validators.required]],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  register(){
    let formData = this.registerForm.value;
    this.service.register(formData).subscribe((result) => {
      alert('Register successful!');
      this.registerForm.reset();
      window.location.reload();
    }, (err) => {
      alert('Register failed!');
      console.log(err);
    });
  }
}