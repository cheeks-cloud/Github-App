import { Component, OnInit } from '@angular/core';
import{ GithubServiceService  } from 'src/app/Services/github-service.service'
import{ Repo } from 'src/app/Classes/repo';
import{ User } from 'src/app/Classes/user';

@Component({
  selector: 'app-github-home',
  templateUrl: './github-home.component.html',
  styleUrls: ['./github-home.component.css']
})
export class GithubHomeComponent implements OnInit {

  constructor( private userService: GithubServiceService ) { 
    this.user = new User({},"","");
    this.repo = new Repo("","","")
  }
    
  usersAll:any = [];
  user!:User;
  repo!:Repo;

  ngOnInit(): void {
  }

       username!:{};
       useravatar! : string;
       userfollower!: string;
       userRepos!: string;
        userfollowing! : string;
        userOrganization!: string;

       
 getAllUsers(form:any){
    this.userService. getGithubUser().subscribe(res => {
      this.usersAll = res
      // this.user.login = res.useravatar
      console.log( res)
      form.reset()
    })
  }
      



}
