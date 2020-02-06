import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleContent } from '../_models/article-content.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public aboutContent: ArticleContent;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.aboutContent = this.route.snapshot.data.contentData;
  }

}
