import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private auth:AuthService,
    private toast:ToastrService,
    private route:Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm){
    const {email,password} = f.form.value;
    this.auth.signIn(email,password)
    .then((user:any)=>{
      console.log(user);
      this.toast.success("Now the user is looged in");
      this.route.navigateByUrl("home");
    })
    .catch((err:any)=>{
      this.toast.error("Oops error in Login the user :(");
      console.log(err);
    });
  }

}
