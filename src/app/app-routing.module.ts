import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';
import { ArticleContentResolver } from './_resolvers/article-content.resolver';
import { HomeComponent } from './home/home.component';
import { HomeContentOverviewsResolver } from './_resolvers/home-content-overviews.resolver';
import { ResumeComponent } from './resume/resume.component';
import { AboutContentResolver } from './_resolvers/about-content.resolve';
import { ResumeContentResolver } from './_resolvers/resume-content.resolver';


const routes: Routes = [
  { path: 'about', component: AboutComponent, resolve: { contentData: AboutContentResolver } },
  { path: 'resume', component: ResumeComponent, resolve: { contentData: ResumeContentResolver } },
  { path: 'article/about', redirectTo: '/about', pathMatch: 'full' },
  { path: 'article/resume', redirectTo: '/resume', pathMatch: 'full' },
  {
     path: 'article/:id',
     component: ArticleComponent,
     resolve: { contentData: ArticleContentResolver }
  },
  { path: 'home', component: HomeComponent, resolve: { overviews: HomeContentOverviewsResolver } },
  {
     path: '',
     redirectTo: '/home',
     pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
