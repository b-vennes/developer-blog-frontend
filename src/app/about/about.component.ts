import { Component, OnInit } from '@angular/core';
import { Post } from '../_posts/post.model';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  content: Post;

  constructor(private readonly route: ActivatedRoute, private readonly titleService: Title) {}

  ngOnInit() {
    this.content = this.route.snapshot.data.content;
    this.titleService.setTitle('Branden Vennes | About');
  }
}
