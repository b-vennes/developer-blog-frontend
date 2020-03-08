import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../_posts/post.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  content: Post;

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit() {
    this.content = this.route.snapshot.data.content;
  }
}
