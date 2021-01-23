import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { CourseCreateFormComponent } from './course-create-form/course-create-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReactiveSigupFormComponent } from './reactive-sigup-form/reactive-sigup-form.component';
import { ReactiveChangePasswordFormComponent } from './reactive-change-password-form/reactive-change-password-form.component';
import {HttpClientModule} from '@angular/common/http';
import { PostsComponent } from './posts-component/posts.component';
import {PostService} from './common/services/post.service';
import {MyErrorHandler} from './errors/MyErrorHandler';
import {RouterModule} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { PostPageComponent } from './post-page/post-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LikeComponent,
    ZippyComponent,
    CourseCreateFormComponent,
    ReactiveSigupFormComponent,
    ReactiveChangePasswordFormComponent,
    PostsComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundPageComponent,
    PostPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    PostService,
    {
      provide: ErrorHandler, useClass: MyErrorHandler
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
