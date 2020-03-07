import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  post: Post;

  postLocation: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.post = this.route.snapshot.data.post;
    this.postLocation = `/assets/posts/${this.post.id}.md`;
  }
}
