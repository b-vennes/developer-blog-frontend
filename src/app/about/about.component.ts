import { Component, OnInit } from '@angular/core';
import { Post } from '../_posts/post.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  content: Post;

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit() {
    this.content = this.route.snapshot.data.content;
  }
}
