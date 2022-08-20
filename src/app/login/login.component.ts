import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailValidator, FormBuilder, Validators } from '@angular/forms';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private ds: DatabaseService,private fb:FormBuilder) { }

  submit=false
  

  loginForm=this.fb.group({
    email:['',Validators.required,Validators.email],
    pswd: ["", [Validators.required, Validators.pattern("[a-zA-Z0-9]*")]]
  })
  get f(){
    return this.loginForm.controls
  }
  onSubmit(){
    console.log("f", this.f);
    this.submit=true

      
      var acno = this.loginForm.value.email
      var pswd = this.loginForm.value.pswd
      if (this.loginForm.valid) {
        const result = this.ds.login(EmailValidator, pswd)
        if (result) {
          alert("login success!!")
          this.router.navigateByUrl("dashboard")
        }
      }else{
        this.router.navigateByUrl("dashboard")
      }
  
    
  }
 
  ngOnInit(): void {
  }

}
