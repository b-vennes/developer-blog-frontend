import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ContentService } from '../_services/content.service';
import { ContentDataDto } from '../_dtos/content-data.dto';
import { ArticleContent } from '../_models/article-content.model';

@Injectable()
export class ArticleContentResolver implements Resolve<ArticleContent> {

    constructor(private contentService: ContentService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<ArticleContent> {
        const contentId = route.paramMap.get('id');
        return this.contentService.getContentData(contentId)
            .pipe(
                map(c => {
                    const articleContent = new ArticleContent();

                    articleContent.id = c.id;
                    articleContent.title = c.title;
                    articleContent.data = c.data;
                    articleContent.publishedDate = c.publishedDate;
                    articleContent.updatedDate = c.updatedDate;

                    return articleContent;
                })
            );
    }
}
