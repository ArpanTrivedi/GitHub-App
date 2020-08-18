import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
      private auth:AngularFireAuth
    ) { }

  //signUp the user in it
  signUp(email:string,password:string){
    return this.auth.createUserWithEmailAndPassword(email,password);
  }

  //signIN the user in it
  signIn(email:string,password:string){
    return this.auth.signInWithEmailAndPassword(email,password);
  }

  //get THe user in it
  getUser(){
    return this.auth.authState;
  }

  //signOut the user
  signOut(){
    return this.auth.signOut();
  }

}
