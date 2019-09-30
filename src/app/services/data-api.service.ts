import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { PostInterface } from '../models/post-interface';


@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  posts: Observable<any>;
  post: Observable<any>;

  

  constructor(private http: HttpClient) {}
  
  public selectedPost: PostInterface = {
    id: null,
    title: '',
    body: ''
  };
    getAllPost() {
      const url_api = "https://jsonplaceholder.typicode.com/posts";
      return this.http.get(url_api);
    }

    getPostId(id: string){
      const url_api = `https://jsonplaceholder.typicode.com/posts/${id}`;
      return (this.post = this.http.get(url_api));
    }

    savePost(post: PostInterface){
      const url_api = `https://jsonplaceholder.typicode.com/posts`;
      return this.http
      .post<PostInterface>(url_api, post)
      .pipe(map(data => data));
    }

    updatePost(post){
      const id = post.id;
      const url_api = `https://jsonplaceholder.typicode.com/posts/${id}`;
      return this.http
      .put<PostInterface>(url_api, post)
      .pipe(map(data => data));

    }
    
    deletePost(id: string){
      const url_api = `https://jsonplaceholder.typicode.com/posts/${id}`;
      return this.http
      .delete<PostInterface>(url_api)
      .pipe(map(data => data));
    }
    
}

    
   
