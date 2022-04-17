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
  usersAll:any

  // reposAll:any = [];
  
  
  constructor( private userService: GithubServiceService ) { 
    this.userService=userService;
   
  }

  ngOnInit(): void {
    this.user = this.userService.user
  }
  

    getAllUsers( form:NgForm){
      if ( '')
      {alert("Please select")
    }else
      this.userService.getGithubUser(this.user)
      console.log(this.user)
        form.reset()
    }

      }

   
  
    
    // get original user

      // this.userService.getGithubUser().subscribe((user: any) => {
      //   this.usersAll = user
      //   console.log(user.name)
      //   // form.reset()
      // });
  
    //   this.userService. getGithubRepos().subscribe(repo => {
    //     this.reposAll = repo
    //     console.log(repo)
  
    //     });



    












    
  
    
 
  

    


