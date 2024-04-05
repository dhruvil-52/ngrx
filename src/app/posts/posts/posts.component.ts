import { Component, OnInit } from '@angular/core';
import { postInterface } from '../state/posts.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getPosts } from '../state/posts.selector';
import { Post } from 'src/app/shared/models/post.interface';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  postList$: Observable<Post[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.postList$ = this.store.select(getPosts);
  }
}
