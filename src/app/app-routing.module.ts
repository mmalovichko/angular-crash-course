import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PostsComponent} from './posts-component/posts.component';
import {ReactiveChangePasswordFormComponent} from './reactive-change-password-form/reactive-change-password-form.component';
import {NotFoundPageComponent} from './not-found-page/not-found-page.component';
import {CourseCreateFormComponent} from './course-create-form/course-create-form.component';
import {PostPageComponent} from './post-page/post-page.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'posts/:id', component: PostPageComponent
  },
  {
    path: 'posts', component: PostsComponent
  },
  {
    path: 'change', component: ReactiveChangePasswordFormComponent
  },
  {
    path: 'courses', component: CourseCreateFormComponent
  },
  {
    path: '**', component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
