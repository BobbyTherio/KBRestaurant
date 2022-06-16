import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { KBOffer } from 'src/app/interfaces/offer';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.component.html',
  styleUrls: ['./edit-offer.component.scss']
})
export class EditOfferComponent implements OnInit {

  editOfferForm!: FormGroup;
  offer!:KBOffer[];
  showOffer:any;
  data:any;

  constructor (
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private editOfferService: OfferService,
    private offerService: OfferService,)

    {
      this.editOfferForm = this.fb.group({
        promo_id:[""],
        name: [""],
        description: [""],
        price: [""],
        start_date: [""],
        end_date: [""],
        date: [""],
      })
  }

  ngOnInit(): void {
    //Get Offer item for dropdown
    this.offerService.getOffers().subscribe((results) => {
      this.offer = results;
    }, (err) => {
      console.log(err);
    });
    
    this.offerService.getOfferID(this.activatedRoute.snapshot.params?.['id']).subscribe((result:any) =>{
      console.log(result)
      this.showOffer = result
      this.editOfferForm = this.fb.group({
        promo_id:[this.showOffer.promo_id],
        name: [this.showOffer.name],
        description: [this.showOffer.description],
        price: [this.showOffer.price],
        start_date: [this.showOffer.start_date],
        end_date: [this.showOffer.end_date],
        date: [this.showOffer.date],
      })
    });
  }

  updateOffer() {       
    this.editOfferService.updateOffer(this.editOfferForm.value.promo_id,this.editOfferForm.value).subscribe(response => {
      if(response){
        setTimeout(() => {
          this.editOfferForm.reset();
          window.location.reload()
        }, )}
    });
  }
}
