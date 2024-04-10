import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { loginStart } from '../state/auth.actions';
import { setLoadingSpinner } from 'src/app/shared/store/shared.actions';
import { getErrorMessage } from 'src/app/shared/store/shared.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: any = { email: 'test@test.com', password: '123456' };
  errorMsg: Observable<string>
  constructor(private store: Store<AppState>) { }

  onSubmit() {
    this.store.dispatch(setLoadingSpinner({ status: true }));
    this.store.dispatch(loginStart({ email: this.user.email, password: this.user.password }));

    this.errorMsg = this.store.select(getErrorMessage);
  }
}
