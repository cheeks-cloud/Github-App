import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import{ Repo } from 'src/app/Classes/repo';
import{ User } from 'src/app/Classes/user';


@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  // user!:User;
  // repo!:Repo;

  constructor( private http: HttpClient) { 
   
  }

  
   baseUrl:string = `https://api.github.com/users?api_key=${environment.apiKey}`
   


   getGithubUser(): Observable<object> {
     return this.http.get(this.baseUrl)
   }











}
