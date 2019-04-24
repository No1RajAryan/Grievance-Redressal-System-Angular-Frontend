import { Component, OnInit } from '@angular/core';
import { QueryServiceService } from 'src/app/query-service.service';
import { FormGroup, FormControl, Validators, FormBuilder, Form } from '@angular/forms';
import { JSDocTagName } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  adminName: String = ""
  inCharges: Array<any> = []
  selectedProblem: any;
  resolvedProblems: Array<any> = []
  unResolvedProblems: Array<any> = []
  inCHargeForm: FormGroup;

  constructor(private queryService: QueryServiceService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.adminName = JSON.parse(localStorage.getItem('user')).name
    this.queryService.getallProblems().subscribe((response: any) => {
      if (response.success) {
        let problems: Array<any> = response.message
        this.resolvedProblems = problems.filter((prob) => {
          return prob.resolved
        })
        this.unResolvedProblems = problems.filter((prob) => {
          return !prob.resolved
        })
      }
    })
    this.queryService.getAllIncharges().subscribe((response: any) => {
      if (response.success) {
        this.inCharges = response.message
        console.log(this.inCharges)
      }
    })
    this.createForm()
  }

  //Create Form is Used to Initalize the Values the Form
  createForm() {
    this.inCHargeForm = this.formBuilder.group({
      inChargeId: ['', Validators.required]
    });
  }

  selectProblem(problem: any) {
    this.selectedProblem = problem
  }

  confirmAssignment(form: FormGroup) {
    console.log(form.value)
    this.queryService.assignIncharge(this.selectedProblem._id, form.value.inChargeId).subscribe((response: any) => {
      if (response.success) {
        alert(response.message)
      }
    })
  }



}
