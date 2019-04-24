import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegServiceService {

  constructor(private http:HttpClient){ }


  registerUser(data: any) {
    const body = {
      name: data.name_txt,
      password: data.pass_txt,
      email_id: data.email_txt,
      department: data.dept_txt,
      year: data.year_txt,
      reg_no: data.reg_txt
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post("http://localhost:3000/users/register", body).pipe(map(res => res, { 'headers': headers }));
  }

  registerAdmin(data: any){
    const body = {
      name: data.name_txt,
      password: data.pass_txt,
      email_id: data.email_txt,
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post("http://localhost:3000/users/registerAdmin", body).pipe(map(res => res, { 'headers': headers }));
  }

  registerInCharge(data: any){
    const body = {
      name: data.name_txt,
      password: data.pass_txt,
      email_id: data.email_txt,
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post("http://localhost:3000/users/registerInCharge", body).pipe(map(res => res, { 'headers': headers }));
  }
}

