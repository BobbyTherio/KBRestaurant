import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactusService } from 'src/app/services/contactus.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  myForm!: FormGroup;

  constructor(private fb: FormBuilder, private contactusService:ContactusService) { 
    this.myForm = this.fb.group({
      name: ["", [Validators.required]],
      email: ["",[Validators.required,Validators.email]],
      message:["",[Validators.required,]]
    })
  }

  ngOnInit() {
    
  }
  onSubmit(){
    this.contactusService.newContactusemail(this.myForm.value).subscribe(() => {
      alert('We will be in contact with you as soon as possible');
      
    });
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
