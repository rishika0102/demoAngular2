import { Component, OnInit, ViewChild, NgModule } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-wild-card',
  templateUrl: './wild-card.component.html',
  styleUrls: ['./wild-card.component.css']
})
export class WildCardComponent implements OnInit {

  constructor() { }
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  }
  submitted = false;
  ngOnInit(): void {
    console.log("submitted");
  }
  // onSubmit(form: NgForm){
  //   console.log("submitted", form);
  // }
  suggestUserName() {

    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
       userData: {
         username: suggestedName
       }
    });
  }
  onSubmit() {

    this.submitted = true;
    console.log(this.signupForm);
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.userData.secret;
    this.user.answer = this.signupForm.value.userData.questionAnswer;
    this.user.gender = this.signupForm.value.userData.gender;
  }

}
