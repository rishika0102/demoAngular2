import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { PostService } from '../post.service';

@Component({
  selector: 'app-httpservice',
  templateUrl: './httpservice.component.html',
  styleUrls: ['./httpservice.component.css']
})
export class HttpserviceComponent implements OnInit {
   postForm: FormGroup;
   posts:any ;
   error = null;


  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required)
    });
    this.getPosts();
  }

  getPosts() {
   this.postService.fetchPosts().subscribe(response =>{
        console.log("get response",response);
        this.posts = response;
    })

  }
  onCreatePost(){
    const postData = this.postForm.value;
    this.postService.createPost(postData).subscribe(response => {
      console.log("response",response);
      this.getPosts();
    }, error => {
      this.error = error.message;
    }
    )
  }
  clearPost(){
    this.postService.clearPost().subscribe(response =>{
      this.getPosts();
    })
  }
  // errors = (response:any) => {
  //  if(response == ''){
  //     this.error = null;
  //    }
  //    else{
  //      this.error = response;
  //    }
  //  }
}

