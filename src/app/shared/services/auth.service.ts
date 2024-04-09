import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { authResponseData } from '../models/authResponse.model';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<authResponseData> {
    return this.http.post<authResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key= ${environment.FIREBASE_API_KEY}`,
      { email: email, password: password, returnSecureToken: true })
  }

  formatUser(data: authResponseData) {
    const expirationDate = new Date(new Date().getTime() + (+data.expiresIn * 1000));
    const user = new User(data.email, data.idToken, data.localId, expirationDate);
    return user;
  }
}
