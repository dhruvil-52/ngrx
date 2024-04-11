import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loginStart, loginSuccess } from "./auth.actions";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { AuthService } from "src/app/shared/services/auth.service";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.state";
import { setErrorMessage, setLoadingSpinner } from "src/app/shared/store/shared.actions";
import { Router } from "@angular/router";

@Injectable()

export class AuthEffects {
    constructor(private actions$: Actions,
        private authService: AuthService,
        private store: Store<AppState>,
        private router: Router) { }

    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginStart),
            exhaustMap((action: any) => {
                return this.authService.login(action.email, action.password).pipe(
                    map((data) => {
                        this.store.dispatch(setLoadingSpinner({ status: false }));
                        const user: any = this.authService.formatUser(data);
                        return loginSuccess({ user });
                    }), catchError((e) => {
                        let erMsg: string = e.error.error.message;
                        erMsg = erMsg.replaceAll('_', ' ')
                        this.store.dispatch(setLoadingSpinner({ status: false }));
                        return of(setErrorMessage({ msg: erMsg }))
                    })
                )
            })
        )
    })

    loginRedirect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginSuccess),
            tap((action) => {
                this.router.navigate(['/'])
            })
        )
    }, {
        dispatch: false
    })
} 