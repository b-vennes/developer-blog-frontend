import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PostList } from '../posts.list';
import { Post } from '../post.model';

@Injectable()
export class HomeContentOverviewsResolver implements Resolve<Array<Post>> {
    public resolve(): Observable<Array<Post>> {
        return of(PostList);
    }
}
