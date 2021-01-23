import { TestBed } from '@angular/core/testing';

import { PostService } from './common/services/post.service';

describe('PostServiceService', () => {
  let service: PostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
