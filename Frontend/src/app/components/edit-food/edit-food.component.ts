import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FoodService } from 'src/app/services/food.service';
import { KBFood } from 'src/app/interfaces/food';
import { response } from 'express';

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
    
    
  }

  ngOnInit(): void {
    //Get Food item for dropdown
    this.foodService.getFood().subscribe((results) => {
      this.food = results;
    }, (err) => {
      console.log(err);
    });

  }

  editFood() {       
    
    this.editFoodService.editFood(this.editFoodForm.value.food_id,this.editFoodForm.value).subscribe( response => {
      if(response){
        console.log('I am here');
      this.editFoodForm.reset();
      // window.location.reload();
      }
      
    });
  }
  // get name() {
  //   return this.editFoodForm.get('name');
  // }
  // get description() {
  //   return this.editFoodForm.get('description');
  // }
  // get price() {
  //   return this.editFoodForm.get('price');
  // }
  // get category_id() {
  //   return this.editFoodForm.get('category_id');
  // }
  // get ingredients() {
  //   return this.editFoodForm.get('ingredients');
  // }
}
