import { Component, OnInit } from '@angular/core';
import { Post } from '../_posts/post.model';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  content: Post;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly titleService: Title,
    private readonly metaService: Meta) {}

  ngOnInit() {
    this.content = this.route.snapshot.data.content;

    this.titleService.setTitle('Branden Vennes | About');

    this.metaService.updateTag({ name: 'description', content: 'About Branden Vennes' });
    this.metaService.updateTag({ name: 'author', content: 'Branden Vennes' });
    this.metaService.updateTag({
      name: 'keywords',
      content: 'Software, Developer, Full-Stack, About, Web, Portland, Oregon'
    });
  }
}
