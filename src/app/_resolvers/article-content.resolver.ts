import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Post } from '../post.model';
import { PostList } from '../posts.list';

@Injectable()
export class ArticleContentResolver implements Resolve<Post> {
    resolve(route: ActivatedRouteSnapshot): Observable<Post> {
        const postId = route.paramMap.get('id');

        const posts = PostList.filter(list => list.id === postId);

        if (posts.length !== 1) {
            return of(null);
        }

        return of(posts[0]);
    }
}
