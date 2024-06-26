import { Component, OnInit } from '@angular/core';
import { postInterface } from './state/posts.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getPosts, getUserCounts } from './state/posts.selector';
import { Post } from 'src/app/shared/models/post.interface';
import { AppState } from 'src/app/app.state';
import { deletePost } from './state/posts.actions';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  postList$: Observable<Post[]>;
  noOfUser$: Observable<number>;

  constructor(private store: Store<AppState>) { }

  onDelete(rowData: Post) {
    let result = window.confirm("Are you sure want to Delete " + rowData.name + " ?");
    if (!!result) {
      this.store.dispatch(deletePost({ userId: rowData.id }))
    }
  }

  ngOnInit(): void {
    this.postList$ = this.store.select(getPosts);
    this.noOfUser$ = this.store.select(getUserCounts);
  }
}
