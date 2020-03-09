import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../_posts/post.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  content: Post;

  constructor(private readonly route: ActivatedRoute, private readonly titleService: Title) {}

  ngOnInit() {
    this.content = this.route.snapshot.data.content;
    this.titleService.setTitle(`Branden Vennes | ${this.content.title}`);
  }
}
