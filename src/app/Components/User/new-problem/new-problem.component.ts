import { Component, OnInit } from '@angular/core';
import { QueryServiceService } from 'src/app/query-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-problem',
  templateUrl: './new-problem.component.html',
  styleUrls: ['./new-problem.component.css']
})
export class NewProblemComponent implements OnInit {
  queryForm:FormGroup;
  constructor(private formBuilder: FormBuilder,private queryService:QueryServiceService) { }

  ngOnInit() {
    this.createForm()
  }
  createForm() {
    this.queryForm = this.formBuilder.group({
      query_txt: ['',Validators.required],
    });
  }
  onSubmit(form: FormGroup) {
    this.queryService.newproblem(form.value).subscribe((res:any)=>{
      if(!res.success){
        alert('An Error Occured')
      } else {
        alert(res.message)
      }
    })
  }

}
