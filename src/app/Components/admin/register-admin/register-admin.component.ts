import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, Validators  , FormArray, NgForm, FormGroup } from '@angular/forms';
import { RegServiceService } from 'src/app/reg-service.service';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit {
  regForm: FormGroup
  constructor(private formBuilder: FormBuilder,private regService:RegServiceService) { }

  ngOnInit() {
    this.createForm()
  }

  createForm() {
    this.regForm = this.formBuilder.group({
      name_txt: ['',Validators.required],
      pass_txt: ['',Validators.required],
      email_txt:['',Validators.required],
      cpass_txt:['',Validators.required],
    });
}
onSubmit() {
  if(this.regForm.value.cpass_txt == this.regForm.value.pass_txt){
    this.regService.registerAdmin(this.regForm.value).subscribe((res:any)=>{
      if(res.error){
        alert('An Error Occured')
      } else {
        alert(res.message)
      }
    })
  }

}
}