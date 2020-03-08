import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Post } from '../_posts/post.model';
import { ContentService } from '../_services/content.service';

@Injectable()
export class ArticleContentResolver implements Resolve<Post> {
    constructor(private contentService: ContentService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Post> {
        const postId = route.paramMap.get('id');

        return of(this.contentService.getContentInfo(postId));
    }
}
