import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  public articleData = '<h1>test title</h1>';
  public id: string;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(m => {
      this.id = m.get('id');
    });
  }

  ngOnInit() {
  }

}
