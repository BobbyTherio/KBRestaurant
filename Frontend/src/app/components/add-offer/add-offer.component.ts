import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.scss']
})
export class AddOfferComponent implements OnInit {

  addOfferForm!: FormGroup;

  constructor(private fb: FormBuilder, private addOfferService: OfferService) {
    this.addOfferForm = this.fb.group({
      name: ["", [Validators.required]],
      description: ["",[Validators.required]],
      price:["",[Validators.required,]],
      start_date:["",[Validators.required,]],
      end_date:["",[Validators.required,]],
      date:["",[Validators.required,]],
    })
   }

  ngOnInit(): void {
  }

  addNewOffer(){
    console.log(this.addOfferForm.value);
    this.addOfferService.newOffer(this.addOfferForm.value).subscribe(() => {
      alert('New offer added successfully');
      this.addOfferForm.reset();
      window.location.reload();
    });
  }

  get name(){
    return this.addOfferForm.get('name');
  }
  get description(){
    return this.addOfferForm.get('description');
  }
  get price(){
    return this.addOfferForm.get('price');
  }
  get start_date(){
    return this.addOfferForm.get('start_date');
  }
  get end_date(){
    return this.addOfferForm.get('end_date');
  }
  get date(){
    return this.addOfferForm.get('date');
  }
}