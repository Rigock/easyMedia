import { Component, HostBinding, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  public isShowModal: boolean = false;
  post: Post = {
    id: 0,
    title: '',
    message: '',
    created_at: new Date(),
    author: 'me',
    user_id: 0,
  };

  constructor(
    private postsService : PostsService
  ) { }

  ngOnInit(): void {
  }

  sharePost(){
    // Deleted this fields since the DataBase creates them AUTO_STYLE.

    delete this.post.created_at;
    delete this.post.id;

    this.postsService.savePost(this.post).subscribe(
      res =>{
        this.isShowModal = true;
        this.post= {
          id: 0,
          title: '',
          message: '',
          created_at: new Date(),
          author: 'me',
          user_id: 0,
        };
        console.log(res);
      },
      err =>{
        this.isShowModal = false;
        console.error(err)}
    );
  }

}
