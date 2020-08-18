import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GithubService } from 'src/app/service/github.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:any = null;
  userName: string;
  repoUrl:string;
  error=null;

  constructor(
    private githubService:GithubService,
    private ref:ChangeDetectorRef
    ) { }

  ngOnInit(): void {
  }

  findUser(){
    this.githubService.getUserDetails(this.userName)
    .subscribe((user:any)=>{
        this.user = user;
        this.repoUrl=user?.repos_url;
        this.error = null;

        this.ref.detectChanges();

    },(err)=>{
      this.user = null;
      this.error="User not found";
      this.ref.checkNoChanges();
    });
  }

}
