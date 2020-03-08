import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Resolve, } from '@angular/router';
import { Post } from '../_posts/post.model';
import { ContentService } from '../_services/content.service';

@Injectable()
export class ResumeContentResolver implements Resolve<Post> {
    constructor(private readonly contentService: ContentService) {}

    resolve(): Observable<Post> {
        return of(this.contentService.getResumeContent());
    }
}
