import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../_posts/post.model';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  content: Post;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly titleService: Title,
    private readonly metaService: Meta) {}

  ngOnInit() {
    this.content = this.route.snapshot.data.content;

    this.titleService.setTitle(`Branden Vennes | ${this.content.title}`);

    this.metaService.updateTag({ name: 'description', content: `${this.content.summary}` });
    this.metaService.updateTag({ name: 'author', content: 'Branden Vennes' });
    this.metaService.updateTag({ name: 'keywords', content: `${this.content.tags.join(', ')}` });
  }
}
