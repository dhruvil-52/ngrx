import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { addPost } from '../state/posts.actions';

@Component({
  selector: 'app-post-add-edit',
  templateUrl: './post-add-edit.component.html',
  styleUrls: ['./post-add-edit.component.scss']
})

export class PostAddEditComponent {
  user: any = { name: '', age: 0, gender: '' };

  constructor(private store: Store<AppState>) { }

  saveUser() {
    this.store.dispatch(addPost({ user: this.user }))
  }
}
