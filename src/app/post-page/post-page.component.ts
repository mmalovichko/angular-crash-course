import {Component, Injectable, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {combineLatest} from 'rxjs';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {PostService} from '../common/services/post.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
@Injectable()
export class PostPageComponent implements OnInit {
  public id: number;
  public idFromParam: number;

  constructor(private route: ActivatedRoute, private postService: PostService) {
    console.log('CONSTRUCTOR');
  }

  ngOnInit(): void {
    console.log('ON INIT');
    combineLatest([this.route.paramMap, this.route.queryParamMap]) // combines tow observable together
      .pipe(
        switchMap(combined => {// after observables emitted call the service and pass its observable
          this.id = +combined[0].get('id');
          this.idFromParam = +combined[1].get('id');
          console.log('received params');

          return this.postService.get();
        })
      )
      .subscribe(posts => {// get results from service call
        console.log('received posts');
        console.log(posts);
      });
  }

  getNextId() {
    return this.id + 1;
  }
}
