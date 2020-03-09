import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../_posts/post.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public posts: Post[];

  constructor(private route: ActivatedRoute, private titleService: Title) { }

  ngOnInit() {
    this.posts = this.route.snapshot.data.posts;
    this.titleService.setTitle('Branden Vennes | Full-Stack Software Developer');
  }
}
