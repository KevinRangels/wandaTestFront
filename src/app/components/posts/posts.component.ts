import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { PostInterface } from '../../models/post-interface';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor( private dataApi: DataApiService ) { }

  private posts: PostInterface;

  ngOnInit() {
    this.getListPost();
  }

  getListPost(): void{
    this.dataApi
    .getAllPost()
    .subscribe((posts:PostInterface) => (this.posts = posts));
  }

  onDeletePost(id:string): void{
    if(confirm("¿Estás seguro?")){
      this.dataApi.deletePost(id).subscribe();
      alertify.success("Eliminado con éxito ");

    }
  }
  onPreUpdatePost(post: PostInterface): void {
    this.dataApi.selectedPost = Object.assign({}, post);
  }

  resetForm(postForm?: NgForm): void{
    this.dataApi.selectedPost = {
      id: null,
      title: '',
      body: ''
    };
   
  }
}
