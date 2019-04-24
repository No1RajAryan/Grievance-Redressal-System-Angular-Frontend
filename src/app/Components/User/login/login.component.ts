import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/login-service.service';

declare var M: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder, private loginService:LoginServiceService) { }
  loginForm: FormGroup;
  ngOnInit() {
    this.createForm();

    if(!localStorage.getItem('user')){

    } else{
      var user:any = JSON.parse(localStorage.getItem('user'))
      if (user.role == 'User') {
          
        this.router.navigate(['/user/home'])
      } else if (user.role == 'Admin') {
        this.router.navigate(['/admin/home'])
      } else {
        this.router.navigate(['/inCharge/home'])
      }
    }
  }
  //Create Form is Used to Initalize the Values the Form
  createForm() {
    this.loginForm = this.formBuilder.group({
      email_txt: ['', Validators.required],
      pass_txt: ['', Validators.required]
    });
  }
  //The action performed After the Button is Pressed

  performLogin() {
    this.loginService.authenticate(this.loginForm.value).subscribe((response: any) => {
      if (response.success) {
        localStorage.setItem('user', JSON.stringify(response.data))
        if (response.data.role == 'User') {
          
          this.router.navigate(['/user/home'])
        } else if (response.data.role == 'Admin') {
          this.router.navigate(['/admin/home'])
        } else {
          this.router.navigate(['/inCharge/home'])
        }
      } else {
        alert("An error occured")
      }
    })
  }

  

}