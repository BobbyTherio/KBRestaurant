import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Reviews } from 'src/app/interfaces/reviews';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  review!:Reviews[];
  ReviewForm!: FormGroup;

  constructor(private FormBuilderReview: FormBuilder, private reviewService: ReviewService) {
    this.ReviewForm = this.FormBuilderReview.group({
      name: ["", [Validators.required]],
      comment: ["", [Validators.required]],
      rating: [(this.starRating), [Validators.required]],
    });
    this.reviewService.getReview().subscribe((results) => {
      this.review = results;
    }, (err) => {
      console.log(err);
    });
   }
  
  ngOnInit(): void {
  }

  addReview(){
    console.log(this.ReviewForm.value);
    this.reviewService.newReview(this.ReviewForm.value).subscribe(() => {
      alert('New review added successfully');
      this.ReviewForm.reset();
      window.location.reload();
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

  //StarRating
  starRating: number = 0;
  starCount: number = 5;
  onRatingChanged(starRating: number) {
    this.ReviewForm.value.rating = starRating;
    this.starRating = starRating;
    console.log(this.starRating);
  }
}

