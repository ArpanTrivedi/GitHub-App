import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  //findUser APIS
  url:string = "https://api.github.com/users/";
  constructor(private github:HttpClient) { }

  getUserDetails(name:string){
    return this.github.get((this.url+name));
  }
  getRepos(repoUrl:string){
    return this.github.get(repoUrl);
  }
}
