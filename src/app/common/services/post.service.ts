import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from './data.service';
import {Post} from '../model/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService<Post> {

  constructor(http: HttpClient) {
    super(http, 'http://jsonplaceholder.typicode.com/posts/');
  }
}
