import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { response } from 'express';
import { BehaviorSubject } from 'rxjs';
import { AuthResponse } from '../../interfaces/AuthResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
 private apiUrl=' http://localhost:8082/api/auth/login';//Url pour le endPoint Backend
 private tokenSubject=new BehaviorSubject<string | null>(localStorage.getItem('token'));


constructor(private http:HttpClient,private router:Router) { }

login(username:string,password:string){


  return this.http.post<AuthResponse>(this.apiUrl,{username,password}).subscribe(response=>{

    localStorage.setItem('token',response.token);//Enregistrement du token dans le local Storage
    localStorage.setItem('userId',response.id.toString()); //Engistrement du id de l'utilisateur
    localStorage.setItem("userRole",JSON.stringify(response.roles));
    localStorage.setItem("username",response.username);

    console.log("Response du backend:");
    console.log("Username de l'utilisateur:"+""+response.username);
    console.log("Role de l'utilisateur:"+""+response.roles);

    this.tokenSubject.next(response.token);

    if (response.roles.includes('ADMIN')) {

      this.router.navigate(["/accueil-admin"]);
    }
    else if (response.roles.includes('ETUDIANT')) {
      this.router.navigate(["/accueil-admin"]);

    }
    else {
      this.router.navigate(["/home"])
    }
  });

}
logout(){
  localStorage.removeItem('token'); //On supprime le token du localstorage
  localStorage.removeItem('userId');
  localStorage.removeItem('userRole');
  localStorage.removeItem('username');
  this.tokenSubject.next(null);
  this.router.navigate(["/login"]);
}

getToken(){
  return localStorage.getItem('token');
}

isAuthenticated(){

  return !!this.getToken();
}


getUserRole(): string[]  {
  const roles=window.localStorage.getItem("user_role");
  return roles ? JSON.parse(roles) : []; //convertion de JSON en tableau

}



  getUserId() {
    return window.localStorage.getItem("userId");
  }


}
