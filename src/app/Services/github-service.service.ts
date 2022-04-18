import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ Observable } from 'rxjs'
import {environment } from 'src/environments/environment';
import{ Repo } from 'src/app/Classes/repo';
import{ User } from 'src/app/Classes/user';




@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {
 username = "";
constructor( private http: HttpClient) { }

 baseUrl:string = `https://api.github.com/users/`
//  repoUrl:string = `https://api.github.com/users/`


getUser(username:string):Observable<any>{
  return this.http.get<any>(this.baseUrl + `${username}`)
}
getRepo(username:string):Observable<any>{
  return this.http.get<any>(this.baseUrl+ `${username}`+ "/repos")
}
updateUsername(username:any){
  this.username = username;
  
  }



}






















//  constructor( private http: HttpClient) { 
//     this.user = new User("","","","","");
//     this.repo = new Repo("","","",0)
   
//   }
   
//    getGithubUser(user: any){


//     interface ApiResponse {
//       username:string;
//       useravatar : string;
//       userfollower: string;
//        userfollowing: string;
//        userOrganization: string;
    
//        repoName: string;
//        repoForks: number;
//        repoWatchers: string;
//        repoDescription:string;

//     }
//      let promise = new Promise<void>((resolve, reject) =>{
//        this.http.get<ApiResponse>(environment.apiUrl + user).toPromise()
//        .then((response:any)=>{
//          console.log(response)
//          this.user.username = response.login;
//          this.user.useravatar = response.avatar_urlr;
//          this.user.userfollower = response.followers_url;
//          this.user.userfollowing = response.following_url;
//          this.user.userOrganization = response.organizations_url
//            console.log(response.followers_url)  
            
//        this.newUser.push(new User(response.login,response.avatar_url,response.followers_url,
//         response.following_url,response.organizations_url))
         
//          resolve()
//         },
//         (error:any)=>{
//           console.log(error)

//           reject(error);

//         }
//        )
//       })
//      return promise
//      }
  










    
    












   
    
  
  

  //  let promise2 = new Promise<void>((resolve,reject)=>{
  //   this.http.get<ApiResponse>(environment.apiUrl).toPromise()
  //   .then((response:any) =>{
  //     response.items.map((obj:any)=>{
  //       this.repo.repoName = obj.repoName;
  //     })
     

  //     this.repos.push(new Repo("","","",0))

  //     resolve()
  //   },
  //   error=>{
  //       console.log(error)

  //     reject(error);
  //   })
  //  })




   
 

  




  //  getGithubUser(){
  //    return this.http.get(this.baseUrl + this.userName)
  
  //  }

  // //  getGithubRepos(): Observable<object> {
  // //   return this.http.get(this.baseUrl + this.userName + '/repos')
  // // }


  // updateUsername(userName:any){
  //   this.userName = userName;
  //   }
  












