import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { KBDrink } from 'src/app/interfaces/drink';
import { DrinkService } from 'src/app/services/drink.service';

@Component({
  selector: 'app-edit-drink',
  templateUrl: './edit-drink.component.html',
  styleUrls: ['./edit-drink.component.scss']
})

export class EditDrinkComponent implements OnInit {

  editDrinkForm!: FormGroup;
  drink!:KBDrink[];
  showDrink:any;
  data:any;

  constructor (
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private editDrinkService: DrinkService,
    private drinkService: DrinkService,)

    {
      this.editDrinkForm = this.fb.group({
        drink_id:[""],
        name: [""],
        description: [""],
        price: [""],
        category_id: [""],
      })
  }

  ngOnInit(): void {
    //Get Drink item for dropdown
    this.drinkService.getDrinks().subscribe((results) => {
      this.drink = results;
    }, (err) => {
      console.log(err);
    });
    
    this.drinkService.getDrinkID(this.activatedRoute.snapshot.params?.['id']).subscribe((result:any) =>{
      console.log(result)
      this.showDrink = result
      this.editDrinkForm = this.fb.group({
        drink_id:[this.showDrink.drink_id],
        name: [this.showDrink.name],
        description: [this.showDrink.description],
        price: [this.showDrink.price],
        category_id: [this.showDrink.category_id],
      })
    });
  }

  updateDrink() {       
    this.editDrinkService.updateDrink(this.editDrinkForm.value.drink_id,this.editDrinkForm.value).subscribe(response => {
      if(response){
        setTimeout(() => {
          this.editDrinkForm.reset();
          window.location.reload()
        }, )}
    });
  }
}
