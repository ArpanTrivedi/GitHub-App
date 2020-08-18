import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  data:any;
  email;
  constructor(
    private auth:AuthService,
    private toastr: ToastrService,
    private router:Router,
    private ref:ChangeDetectorRef
    ) {
      auth.getUser().subscribe((user:any)=>{
        this.email=user?.email;
        console.log(this.email);
      })
    }

  ngOnInit(): void {

  }

  signOut(){
    console.log("SignOut calls");
    this.auth.signOut()
    .then((user:any)=>{
      this.email=null;
      this.toastr.info(`${user.email} is signed out Log in`);
      this.router.navigateByUrl("signin");
      this.ref.detectChanges();
    })
    .catch((err:any)=>{
      this.toastr.warning(err.message,"",{
        closeButton:true
      });
    });
  }

}
