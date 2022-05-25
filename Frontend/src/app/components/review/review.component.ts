import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  ReviewForm!: FormGroup;

  constructor(private FormBuilderReview: FormBuilder, private reviewService: ReviewService) {
    this.ReviewForm = this.FormBuilderReview.group({
      name: ["", [Validators.required]],
      comment: ["", [Validators.required]],
      rating: ["", [Validators.required]],
    })
   }

  ngOnInit(): void {
  }

  addReview(){
    console.log(this.ReviewForm.value);
    this.reviewService.newReview(this.ReviewForm.value).subscribe(() => {
      alert('New review added successfully');
      this.ReviewForm.reset();
    });
  }

  get name(){
    return this.ReviewForm.get('name');
  }
  get comment(){
    return this.ReviewForm.get('comment');
  }
  get rating(){
    return this.ReviewForm.get('rating');
  }
}