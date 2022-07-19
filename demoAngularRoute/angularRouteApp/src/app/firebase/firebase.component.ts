import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {
  postForm: FormGroup;
  posts:any ;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.postForm = new FormGroup ({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required)
    });
    this.getPosts();
  }

  getPosts() {
    this.http.get('https://angularrouteapp-default-rtdb.firebaseio.com/posts.json').pipe(map((response:any) => {
       let posts = [];
       for(let key in response){
         posts.push({...response[key], key});
       }
       return posts;
    })).subscribe(response => {
        console.log("get response",response);
        this.posts = response;
    })
  }

  onCreatePost(){
    const postData = this.postForm.value;
    this.http.post('https://angularrouteapp-default-rtdb.firebaseio.com/posts.json', postData).subscribe(response => {
      console.log("response",response);
      this.getPosts();
    })
  }

}
