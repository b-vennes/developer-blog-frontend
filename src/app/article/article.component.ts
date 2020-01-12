import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentDataDto } from '../_dtos/content-data.dto';
import { ArticleContent } from '../_models/article-content.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  public articleContent: ArticleContent;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.articleContent = this.route.snapshot.data.contentData;
  }
}
