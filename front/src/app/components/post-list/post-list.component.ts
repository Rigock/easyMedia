import { Component, HostBinding, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  publications: any = [];

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.postsService.getPosts().subscribe(
      res => {
        this.publications = res;
        console.log(this.publications);
      },
      err => console.error(err)
    );
  }

}
