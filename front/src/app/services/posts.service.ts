import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Post } from "../models/post";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient
  ) { }

  getPosts() {
    return this.http.get(`${this.url}/easyMedia`);
  }

  getSpecificPost(id:string) {
    return this.http.get(`${this.url}/easyMedia/${id}`);
  }

  savePost(_post: Post) {
    return this.http.post(`${this.url}/easyMedia`, _post);
  }

  deletePost(id:string) {
    return this.http.delete(`${this.url}/easyMedia/${id}`);
  }

  updatePost(id:string, updatedPost: Post): Observable<Post> {
    return this.http.put(`${this.url}/easyMedia/${id}`, updatedPost)
  }

}
