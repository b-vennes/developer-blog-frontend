import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ContentOverviewDto } from '../_dtos/content-overview.dto';
import { ContentService } from '../_services/content.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArticleOverview } from '../_models/article-overview.model';

@Injectable()
export class HomeContentOverviewsResolver implements Resolve<Array<ContentOverviewDto>> {
    constructor(private contentService: ContentService) {}

    public resolve(): Observable<Array<ContentOverviewDto>> {
        return this.contentService.getContentOverviews()
            .pipe(
                map(overviews => {
                    return overviews
                        .map(c => {
                            const overview = new ArticleOverview();

                            overview.id = c.id;
                            overview.title = c.title;
                            overview.summary = c.summary;
                            overview.imageUrl = c.imageUrl;
                            overview.publishedDate = c.publishedDate;
                            overview.updatedDate = c.updatedDate;

                            return overview;
                        }
                    );
                })
            );
    }
}
