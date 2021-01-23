import {Component, ViewEncapsulation} from '@angular/core';
import {LikeOutputModel} from './like/like-output-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crash-course';
  post = {
    likes: 15,
    userLiked: true
  };
  titles: object[];

  updateLikes(liked: LikeOutputModel): void {
    console.log(liked);
    this.post.likes += liked.liked() ? 1 : -1;
  }

  reloadTitles(): object[] {
    return this.titles = [
      {id: 1, name: 'max' + new Date().getTime()},
      {id: 2, name: 'alex'}
    ];
  }

  trackTitles(index, title): number {
    return title ? title.id : undefined;
  }
}
