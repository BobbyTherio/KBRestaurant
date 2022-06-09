import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FoodService } from 'src/app/services/food.service';
import { KBFood } from 'src/app/interfaces/food';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.scss']
})
export class EditFoodComponent implements OnInit {

  editFoodForm!: FormGroup;
  food!:KBFood[]

  constructor(
    private fb: FormBuilder,
    private editFoodService: FoodService,
    private foodService: FoodService,
    
  ) {
    this.editFoodForm = this.fb.group({
      food_id:[],
      name: ["",],
      description: ["",],
      price: ["",],
      category_id: ["",],
      ingredients: [""],
    })
    
    //Get Food item for dropdown
    foodService.getFood().subscribe((results) => {
      this.food = results;
    }, (err) => {
      console.log(err);
    });

  }

  ngOnInit(): void {
  }

  editFood() {
    console.log(this.editFoodForm.value);    
    console.log(this.editFoodForm.value.food_id);    
    
    this.editFoodService.editFood(this.editFoodForm.value.food_id,this.editFoodForm.value).subscribe(() => {
      alert(' Food edited successfully');
      this.editFoodForm.reset();
      window.location.reload();
    });
  }
  get name() {
    return this.editFoodForm.get('name');
  }
  get description() {
    return this.editFoodForm.get('description');
  }
  get price() {
    return this.editFoodForm.get('price');
  }
  get category_id() {
    return this.editFoodForm.get('category_id');
  }
  get ingredients() {
    return this.editFoodForm.get('ingredients');
  }
}
