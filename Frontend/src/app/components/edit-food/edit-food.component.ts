import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FoodService } from 'src/app/services/food.service';
import { KBFood } from 'src/app/interfaces/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.scss']
})

export class EditFoodComponent implements OnInit {
 
  editFoodForm!: FormGroup;
  food!:KBFood[];
  showFood:any;
  data:any;

  constructor (
    private fb: FormBuilder,
    private activatedRoute:ActivatedRoute,
    private editFoodService: FoodService,
    private foodService: FoodService,) 

    {
      this.editFoodForm = this.fb.group({
        food_id:[""],
        name: [""],
        description: [""],
        price: [""],
        category_id: [""],
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
    
    this.foodService.getFoodID(this.activatedRoute.snapshot.params?.['id']).subscribe((result:any) =>{
      console.log(result)
      this.showFood = result
      this.editFoodForm = this.fb.group({
        food_id:[this.showFood.food_id],
        name: [this.showFood.name],
        description: [this.showFood.description],
        price: [this.showFood.price],
        category_id: [this.showFood.category_id],
        ingredients: [this.showFood.ingredients],
      })
    })
  }

  editFood() {       
    this.editFoodService.editFood(this.editFoodForm.value.food_id,this.editFoodForm.value).subscribe(response => {
      if(response){
        setTimeout(() => {
          this.editFoodForm.reset();
          window.location.reload()
        }, )} 
    });
  }
}
