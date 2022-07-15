import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts:any ;
  constructor(private http: HttpClient) { }

  fetchPosts(){
     return this.http.get('https://angularrouteapp-default-rtdb.firebaseio.com/posts.json').pipe(map((response:any) =>{
       let posts = [];
       for(let key in response){
         posts.push({...response[key], key});
       }
       return posts;
    }));
  }
  createPost(postData: any){
     return this.http.post('https://angularrouteapp-default-rtdb.firebaseio.com/posts.json', postData)
  };
  clearPost(){
  return this.http.delete('https://angularrouteapp-default-rtdb.firebaseio.com/posts.json')
}
}
