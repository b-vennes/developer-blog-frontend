import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { ContentDisplayComponent } from './content-display/content-display.component';
import { ArticleComponent } from './article/article.component';

const appRoutes: Routes = [
   { path: 'about', component: AboutComponent },
   { path: 'article/:id', component: ArticleComponent },
   { path: 'home', component: HomeComponent },
   {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
   }
 ];

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      ArticleComponent,
      NavigatorComponent,
      AboutComponent,
      ContentDisplayComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatToolbarModule,
      MatMenuModule,
      MatIconModule,
      MatButtonModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
