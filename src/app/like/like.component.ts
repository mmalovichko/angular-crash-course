import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LikeOutputModel} from './like-output-model';


@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input('liked') liked: boolean;
  @Input('total') totalLikes: number;
  @Output('change') change = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.liked = !this.liked;
    this.change.emit(new LikeOutputModel(this.totalLikes, this.liked));
  }
}
