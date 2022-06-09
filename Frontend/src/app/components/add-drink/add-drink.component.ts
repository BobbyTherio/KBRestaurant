import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DrinkService } from 'src/app/services/drink.service';

@Component({
  selector: 'app-add-drink',
  templateUrl: './add-drink.component.html',
  styleUrls: ['./add-drink.component.scss']
})
export class AddDrinkComponent implements OnInit {

  addDrinkForm!: FormGroup;

  constructor(private fb: FormBuilder, private addDrinkService: DrinkService) {
    this.addDrinkForm = this.fb.group({
      name: ["", [Validators.required]],
      description: ["",[Validators.required]],
      price:["",[Validators.required,]],
      category_id:["",[Validators.required,]],
    })
   }

  ngOnInit(): void {
  }

  addNewDrink(){
    console.log(this.addDrinkForm.value);
    this.addDrinkService.newDrink(this.addDrinkForm.value).subscribe(() => {
      alert(`${this.name?.value} has been added successfully`);
      this.addDrinkForm.reset();
      window.location.reload();
    });
  }

  get name(){
    return this.addDrinkForm.get('name');
  }
  get description(){
    return this.addDrinkForm.get('description');
  }
  get price(){
    return this.addDrinkForm.get('price');
  }
  get category_id(){
    return this.addDrinkForm.get('category_id');
  }
}
