import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ContentDataDto } from '../_dtos/content-data.dto';
import { ContentOverviewDto } from '../_dtos/content-overview.dto';

import MockArticle from '../../assets/mock-data/MockArticle.json';
import MockOverviews from '../../assets/mock-data/MockOverviews.json';

@Injectable()
export class ContentService {
    private baseurl = 'http://localhost:5000/api/content';

    constructor(private httpClient: HttpClient) {}

    public getContentData(id: string): Observable<ContentDataDto> {
        const contentData = MockArticle as ContentDataDto;
        contentData.publishedDate = new Date('10/10/2010');
        contentData.updatedDate = new Date('11/11/2011');

        return of(contentData);
        // return this.httpClient.get<ContentDataDto>(`${this.baseurl}/${id}`);
    }

    public getContentOverviews(): Observable<Array<ContentOverviewDto>> {
        const contentOverviews = MockOverviews as Array<ContentOverviewDto>;
        contentOverviews[0].publishedDate = new Date('12/12/2012');
        contentOverviews[1].publishedDate = new Date('1/13/2013');

        return of(contentOverviews);
        // return this.httpClient.get<Array<ContentOverviewDto>>(`${this.baseurl}`);
    }
}
