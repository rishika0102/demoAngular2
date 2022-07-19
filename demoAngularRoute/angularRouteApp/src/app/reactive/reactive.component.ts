import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
    genders = ['male', 'female'];
    signupForm: FormGroup;
    public name = "test";
    public person = {
      "firstName": "jhon",
      "lastName" : "deo"
    }
   usersData: any = "";
   public date = new Date();

   constructor() { }

   ngOnInit(): void {
     this.signupForm = new FormGroup({
        'userData': new FormGroup({
           'username': new FormControl(null, Validators.required),
           'email' : new FormControl(null, [Validators.required, Validators.email ]),
        }),
         'gender': new FormControl('male'),
         'hobbies': new FormArray([])
      });
    }

    onSubmit(val:any) {
       let data = val.value;
       this.usersData = data.userData.username;
      console.log(this.signupForm);
      // console.log("user", this.usersData.username, data);
    }
    onAddHobby() {
      const control = new FormControl(null, Validators.required);
      (<FormArray>this.signupForm.get('hobbies')).push(control)
    }
}
