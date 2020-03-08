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
  { path: 'about', component: AboutComponent, resolve: { content: AboutContentResolver } },
  { path: 'resume', component: ResumeComponent, resolve: { content: ResumeContentResolver } },
  { path: 'article/about', redirectTo: '/about', pathMatch: 'full' },
  { path: 'article/resume', redirectTo: '/resume', pathMatch: 'full' },
  {
     path: 'article/:id',
     component: ArticleComponent,
     resolve: { content: ArticleContentResolver }
  },
  { path: 'home', component: HomeComponent, resolve: { posts: HomeContentOverviewsResolver } },
  {
     path: '',
     redirectTo: '/home',
     pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
