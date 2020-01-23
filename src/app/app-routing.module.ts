import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';
import { ArticleContentResolver } from './_resolvers/article-content.resolver';
import { HomeComponent } from './home/home.component';
import { HomeContentOverviewsResolver } from './_resolvers/home-content-overviews.resolver';
import { ResumeComponent } from './resume/resume.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  {
     path: 'article/:id',
     component: ArticleComponent,
     resolve: { contentData: ArticleContentResolver }
  },
  { path: 'home', component: HomeComponent, resolve: { overviews: HomeContentOverviewsResolver } },
  { path: 'resume', component: ResumeComponent },
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
