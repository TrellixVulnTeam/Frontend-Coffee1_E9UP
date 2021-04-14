import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup  } from '@angular/forms';


@Component({
  selector: 'app-search-feature',
  templateUrl: './search-feature.component.html',
  styleUrls: ['./search-feature.component.css']
})
export class SearchFeatureComponent implements OnInit {
  

  // name = 'Angular ' + VERSION.major;

  // chipsControl = new FormControl('');
  // chipsValue$ = this.chipsControl.valueChanges;
  chipsControl = new FormControl('');
  constructor(private formBuilder:FormBuilder) { }

  searchForm = this.formBuilder.group({
    
    chipsValue$ : this.chipsControl.valueChanges
  })

  ngOnInit(): void {
  }

  saveForm(){
    console.log('Search request is ', this.searchForm.value)
  }

}


// export class SearchFeatureComponent implements OnInit {

//   constructor(private formBuilder:FormBuilder) {}

//   createReviewForm = this.formBuilder.group({
//     datepicker:['', Validators.required],
//     nameOfBusiness:['', Validators.required],
//     beverageName:['', Validators.required],
//     atmosphere:['', Validators.required],
//     overallRating:['', Validators.required],
//     summary:['', Validators.required]
//   })

// saveForm(){
//   console.log('Form data is ', this.createReviewForm.value); 
