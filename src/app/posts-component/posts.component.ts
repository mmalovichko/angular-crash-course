import {Component, OnInit} from '@angular/core';
import {PostService} from '../common/services/post.service';
import {Post} from '../common/model/Post';

@Component({
  selector: 'app-posts-component',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.postService.get()
      .subscribe((posts) => this.posts = (posts as Post[]));
  }

  createdPost(title: HTMLInputElement) {
    let post: any = {title: title.value};
    this.postService.update(post)
      .subscribe(updatedPostId => {
        post.id = updatedPostId;
        this.posts.splice(0, 0, post);
        title.value = '';
      });
  }

  deletePost(id: number, index: number) {
    this.postService.delete(id)
      .subscribe(_ => {
        this.posts.splice(index, 1);
      });
  }
}
