import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { addPost } from '../state/posts.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { getPostById } from '../state/posts.selector';

@Component({
  selector: 'app-post-add-edit',
  templateUrl: './post-add-edit.component.html',
  styleUrls: ['./post-add-edit.component.scss']
})

export class PostAddEditComponent implements OnInit {
  user: any = {};
  id: number;

  constructor(private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params["id"];
      if (this.id) {
        this.store.select(getPostById, { id: this.id }).subscribe((data) => {
          this.user = JSON.parse(JSON.stringify(data));
        })

        // // select and createSelector not working if pass parameter so you can use below code
        // this.store.select(getPostById({ id: this.id })).subscribe((data) => {
        //   this.user = data;
        // })
      } else {
        this.user = {}
      }
    })
  }

  saveUser() {
    this.store.dispatch(addPost({ user: this.user }));
    this.router.navigate(['posts'])
  }
}
