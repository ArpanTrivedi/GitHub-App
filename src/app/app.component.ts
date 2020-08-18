import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { auth } from 'firebase';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firbase-github-apis';

  constructor(
    private toast:ToastrService,
    private auth:AuthService
    ){
      auth.getUser().subscribe((user:any)=>{
        console.log(user);
      },(err:any)=>{
        console.log(err);
      })
    }

}
