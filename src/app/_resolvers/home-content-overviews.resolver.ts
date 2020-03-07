import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PostsList } from '../_posts/posts.list';
import { Post } from '../_posts/post.model';
import { environment } from 'src/environments/environment';
import { DraftPostsList } from '../_posts/draft-posts.list';

@Injectable()
export class HomeContentOverviewsResolver implements Resolve<Array<Post>> {
    public resolve(): Observable<Array<Post>> {
        return environment.production ? of(PostsList) : of(DraftPostsList);
    }
}
