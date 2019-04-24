import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient){ }

  authenticate(data: any) {
    const body = {
      email_id: data.email_txt,
      password: data.pass_txt
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post("http://localhost:3000/users/login", body).pipe(map(res => res, { 'headers': headers }));
  }
}

