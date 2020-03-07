import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatRippleModule } from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentDisplayComponent } from './content-display/content-display.component';
import { ArticleComponent } from './article/article.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ArticleContentResolver } from './_resolvers/article-content.resolver';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { HomeContentOverviewsResolver } from './_resolvers/home-content-overviews.resolver';
import { AboutContentResolver } from './_resolvers/about-content.resolve';
import { ResumeContentResolver } from './_resolvers/resume-content.resolver';
import { FooterComponent } from './footer/footer.component';
import { ContentService } from './_services/content.service';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      ArticleComponent,
      NavigatorComponent,
      AboutComponent,
      ContentDisplayComponent,
      ResumeComponent,
      FooterComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatToolbarModule,
      MatMenuModule,
      MatIconModule,
      MatButtonModule,
      MatCardModule,
      MatSidenavModule,
      MatDividerModule,
      MatRippleModule,
      FlexLayoutModule,
      HttpClientModule,
      MarkdownModule.forRoot({ loader: HttpClient })
   ],
   providers: [
      ArticleContentResolver,
      HomeContentOverviewsResolver,
      AboutContentResolver,
      ResumeContentResolver,
      ContentService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
