import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Resolve, } from '@angular/router';
import { PostList } from '../posts.list';
import { Post } from '../post.model';

@Injectable()
export class ResumeContentResolver implements Resolve<Post> {

    resolve(): Observable<Post> {
        const posts = PostList.filter(list => list.id === 'resume');

        if (posts.length !== 1) {
            return of(null);
        }

        return of(posts[0]);
    }
}
