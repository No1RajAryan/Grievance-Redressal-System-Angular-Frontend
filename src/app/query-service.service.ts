import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class QueryServiceService {

  constructor(private http: HttpClient) { }
  newproblem(data: any) {
    const body = {
      content: data.query_txt,
      posted_by: JSON.parse(localStorage.getItem('user'))._id
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post("http://localhost:3000/problems/newProblem", body).pipe(map(res => res, { 'headers': headers }));
  }

  assignIncharge(probId: String, inChargeId: String) {
    const body = {
      prob_id: probId,
      incharge: inChargeId
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post("http://localhost:3000/incharges/assignInCharge", body).pipe(map(res => res, { 'headers': headers }));
  }

  getUserProblems(){
    return this.http.get("http://localhost:3000/problems/getProblems/" + JSON.parse(localStorage.getItem('user'))._id)
  }

  getProblems(userId: any) {

    return this.http.get("http://localhost:3000/problems/getallProblems/" + JSON.parse(localStorage.getItem('user'))._id)
  }
  getallProblems() {

    return this.http.get("http://localhost:3000/problems/getallProblems/")
  }

  getAllIncharges() {
    return this.http.get("http://localhost:3000/users/getUsers/InCharge")
  }
  getInchargeProblems() {

    return this.http.get("http://localhost:3000/incharges/getProblems/" + JSON.parse(localStorage.getItem('user'))._id)
  }

  resolveProblem(probId: String) {
    const body = {
      id: probId
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post("http://localhost:3000/problems/resolveProblem", body).pipe(map(res => res, { 'headers': headers }));
  }

}
