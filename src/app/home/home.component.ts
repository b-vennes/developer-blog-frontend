import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentOverviewDto } from '../_dtos/content-overview.dto';
import { ArticleOverview } from '../_models/article-overview.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public articleOverviews: ArticleOverview[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.articleOverviews = this.route.snapshot.data.overviews;
  }

}
