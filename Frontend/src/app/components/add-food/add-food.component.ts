import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss']
})
export class AddFoodComponent implements OnInit {

  addFoodForm!: FormGroup;

  constructor(private fb: FormBuilder, private addFoodService: FoodService,private route:Router) {
    this.addFoodForm = this.fb.group({
      name: ["", [Validators.required]],
      description: ["",[Validators.required]],
      price:["",[Validators.required]],
      category_id:["",[Validators.required]],
      ingredients:[""],
    })
   }

  ngOnInit(): void {
  }

  addNewFood(){
    console.log(this.addFoodForm.value);
    this.addFoodService.newFood(this.addFoodForm.value).subscribe(() => {
      // alert(`${this.name?.value} has been added successfully`);
      this.addFoodForm.reset();
      this.route.navigate(['/dashboard-food'])
      // window.location.reload();
    });
  }

  get name(){
    return this.addFoodForm.get('name');
  }
  get description(){
    return this.addFoodForm.get('description');
  }
  get price(){
    return this.addFoodForm.get('price');
  }
  get category_id(){
    return this.addFoodForm.get('category_id');
  }
  get ingredients(){
    return this.addFoodForm.get('ingredients');
  }
}