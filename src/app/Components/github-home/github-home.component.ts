import { Component, OnInit } from '@angular/core';
import{ GithubServiceService  } from 'src/app/Services/github-service.service'
import{ Repo } from 'src/app/Classes/repo';
import{ User } from 'src/app/Classes/user';
import { NgForm,NgModel } from '@angular/forms';

@Component({
  selector: 'app-github-home',
  templateUrl: './github-home.component.html',
  styleUrls: ['./github-home.component.css']
})


export class GithubHomeComponent implements OnInit {

  user!:User;
  repo!:Repo;

  usersAll:User = new User("","","","","","")
  reposAll:Repo[] = []
  username = "";
    
  constructor( private userService: GithubServiceService ) { 
 
  }

  ngOnInit(): void {
    
  }
  search(username:any){    
    this.userService.updateUsername(username)
    console.log(username)
       
    this.userService.getUser(username).subscribe((usersAll:any)=>{
      this.usersAll = usersAll;
      console.log(usersAll);
    })
   
    this.userService.getRepo(username).subscribe((reposAll:any)=>{
      this.reposAll = reposAll;
      console.log(reposAll);

      // form.reset()
    })
   }



 

  // search(username:any){
  //   console.log(username);
  // }











}
   


    












    
  
    
 
  

    


