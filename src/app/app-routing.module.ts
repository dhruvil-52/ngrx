import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { CounterComponent } from './counter/counter/counter.component';
import { PostsComponent } from './posts/posts/posts.component';
import { PostAddEditComponent } from './posts/post-add-edit/post-add-edit.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'counter', component: CounterComponent
  },
  {
    path: 'posts', component: PostsComponent,
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
