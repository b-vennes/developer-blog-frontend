import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public posts: Post[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.posts = this.route.snapshot.data.posts;
  }
}
