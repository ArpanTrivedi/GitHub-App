import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private auth:AuthService,
    private toast:ToastrService,
    private route:Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm)
  {
    const {email,password} = f.form.value;
    this.auth.signUp(email,password)
    .then((user:any)=>{
      this.route.navigateByUrl("signin");
      this.toast.success(`${email} is signed up`);
    })
    .catch((err:any)=>{
      this.toast.error("Sign up failed");
      console.table(err);
    })
  }

}
