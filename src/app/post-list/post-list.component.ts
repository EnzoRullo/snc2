import { Component, OnInit } from '@angular/core';
import { post } from '../post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: post[] = [];

  constructor(private iposts: PostsService) { }

  ngOnInit(): void {
    this.posts = this.iposts.getPost();
  }

  display(v: string) {
    this.posts = this.iposts.getPost().filter(p => p.category == v);
  }

}
