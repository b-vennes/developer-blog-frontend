import { Component, OnInit } from '@angular/core';
import { Post } from '../_posts/post.model';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  content: Post;

  constructor(private readonly route: ActivatedRoute, private readonly titleService: Title) {}

  ngOnInit() {
    this.content = this.route.snapshot.data.content;
    this.titleService.setTitle(`Branden Vennes | Resume`);
  }
}
