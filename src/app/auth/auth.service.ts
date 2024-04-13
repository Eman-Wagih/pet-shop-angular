import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';


const httpOptions: object = {
  Headers: new HttpHeaders({
    'Content-Type': 'application/josn'
  })
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User[] = []
  api = 'http://localhost:3000/user'

  constructor(private http: HttpClient) { }
  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.api);
}

  addUser(user: User) {
    return this.http.post<User>(this.api, user, httpOptions);
   }
   
}
