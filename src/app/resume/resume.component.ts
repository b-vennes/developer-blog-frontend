import { Component, OnInit } from '@angular/core';
import { ArticleContent } from '../_models/article-content.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  public resumeContent: ArticleContent;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.resumeContent = this.route.snapshot.data.contentData;
  }

}
