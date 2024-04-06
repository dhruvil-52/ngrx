import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts.component';
import { PostAddEditComponent } from './post-add-edit/post-add-edit.component';

const routes: Routes = [
  {
    path: '', component: PostsComponent,
    children: [
      {
        path: 'add', component: PostAddEditComponent
      },
      {
        path: 'edit/:id', component: PostAddEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
