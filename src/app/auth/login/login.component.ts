import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { loginStart } from '../state/auth.actions';
import { setLoadingSpinner } from 'src/app/shared/store/shared.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private store: Store<AppState>) { }
  user: any = { email: 'test@test.com', password: '123456' };

  onSubmit() {
    this.store.dispatch(setLoadingSpinner({ status: true }));
    this.store.dispatch(loginStart({ email: this.user.email, password: this.user.password }));
  }
}
