import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  constructor( private http: HttpClient) { }

   private userName = ""
   baseUrl:string = `https://api.github.com/users?api_key=${environment.apiKey}`
   


   getGithubUser(): Observable<object> {
     return this.http.get(this.baseUrl + `this.username`)
   }











}
