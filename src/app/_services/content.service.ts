import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContentDataDto } from '../_dtos/content-data.dto';
import { ContentOverviewDto } from '../_dtos/content-overview.dto';
import { environment } from 'src/environments/environment';

@Injectable()
export class ContentService {
    constructor(private httpClient: HttpClient) {}

    public getContentData(id: string): Observable<ContentDataDto> {
        return this.httpClient.get<ContentDataDto>(`${environment.baseApiUrl}/${id}`);
    }

    public getContentOverviews(): Observable<Array<ContentOverviewDto>> {
        return this.httpClient.get<Array<ContentOverviewDto>>(`${environment.baseApiUrl}`);
    }
}
