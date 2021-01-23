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

@NgModule({
  declarations: [
    AppComponent,
    LikeComponent,
    ZippyComponent,
    CourseCreateFormComponent,
    ReactiveSigupFormComponent,
    ReactiveChangePasswordFormComponent,
    PostsComponent
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
