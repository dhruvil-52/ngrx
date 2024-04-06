import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostAddEditComponent } from './post-add-edit/post-add-edit.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { postReducer } from './state/posts.reducer';
import { POST_STATE_NAME } from '../shared/models/static.model';


@NgModule({
  declarations: [
    PostsComponent,
    PostAddEditComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    FormsModule,
    StoreModule.forFeature(POST_STATE_NAME, postReducer)
  ]
})
export class PostsModule { }
