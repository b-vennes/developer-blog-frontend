import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContentDataDto } from '../_dtos/content-data.dto';
import { ContentOverviewDto } from '../_dtos/content-overview.dto';

@Injectable()
export class ContentService {
    private baseurl = 'http://localhost:5000/api/content';

    constructor(private httpClient: HttpClient) {}

    public getContentData(id: string): Observable<ContentDataDto> {
        return this.httpClient.get<ContentDataDto>(`${this.baseurl}/${id}`);
    }

    public getContentOverviews(): Observable<Array<ContentOverviewDto>> {
        return this.httpClient.get<Array<ContentOverviewDto>>(`${this.baseurl}`);
    }
}
