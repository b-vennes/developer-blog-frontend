import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  post: Post;

  postLocation: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.post = this.route.snapshot.data.post;
    this.postLocation = `/assets/posts/${this.post.id}.md`;
  }
}
