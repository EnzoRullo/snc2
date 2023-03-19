import { Component, Input } from '@angular/core';
import { post } from '../post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {
  @Input()
  post?: post;

  constructor(private pref: PostsService) { }

  aggPref(p: post) {
    this.pref.aggiungiPreferiti(p);
  }
}
