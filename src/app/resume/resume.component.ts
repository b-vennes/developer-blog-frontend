import { Component, OnInit } from '@angular/core';
import { Post } from '../_posts/post.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  content: Post;

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit() {
    this.content = this.route.snapshot.data.content;
  }
}
