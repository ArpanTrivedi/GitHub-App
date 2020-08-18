import { Component, OnInit, Input, OnChanges, ChangeDetectorRef } from '@angular/core';
import { GithubService } from 'src/app/service/github.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit,OnChanges {

  @Input() repoUrl:string;

  repos=[];
  constructor(
    private githubService:GithubService,
    private change:ChangeDetectorRef,
    private toaster:ToastrService
    ) { }

  ngOnInit(): void {

  }

  ngOnChanges(): void{
    if(this.repoUrl){
      this.githubService.getRepos(this.repoUrl).subscribe((repos:[])=>{
        this.repos=repos;
        this.change.detectChanges();
      },(err)=>{
        this.toaster.error("Can't fetch the data :( "+err);
      });
    }
  }

}
