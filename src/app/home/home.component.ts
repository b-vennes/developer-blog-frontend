import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../_posts/post.model';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public posts: Post[];

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta) {}

  ngOnInit() {
    this.posts = this.route.snapshot.data.posts;

    this.titleService.setTitle('Branden Vennes | Full-Stack Software Developer');

    this.metaService.updateTag({ name: 'description', content: 'Branden Vennes\'s software development blog' });
    this.metaService.updateTag({ name: 'author', content: 'Branden Vennes' });
    this.metaService.updateTag({ name: 'keywords', content: 'Software, Development, Full-Stack, Blog, Web' });
  }
}
