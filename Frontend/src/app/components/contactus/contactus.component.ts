import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  myForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ["", [
        Validators.required
      ]],
      email: ["",[
        Validators.required,
        Validators.email
      ]],
      message:["",[
        Validators.required,
      ]]
    })
  }
  onSubmit(){
    console.log(this.myForm.value)
    this.myForm.reset()
  }

  get name(){
    return this.myForm.get('name');
  }
  get email(){
    return this.myForm.get('email');
  }
  get message(){
    return this.myForm.get('message');
  }
}
