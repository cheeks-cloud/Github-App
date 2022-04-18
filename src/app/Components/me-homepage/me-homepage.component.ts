import { Component, OnInit } from '@angular/core';
import{ GithubServiceService  } from 'src/app/Services/github-service.service'
import{ Repo } from 'src/app/Classes/repo';
import{ User } from 'src/app/Classes/user';

@Component({
  selector: 'app-me-homepage',
  templateUrl: './me-homepage.component.html',
  styleUrls: ['./me-homepage.component.css']
})
export class MeHomepageComponent implements OnInit {


  user!:User;
  repo!:Repo;

  usersAll:User = new User("","","","","","")
  reposAll:Repo[] = []
  username = "";

  constructor( private userService: GithubServiceService ) { }

  ngOnInit(): void {

      this.userService.getUser("cheeks-cloud").subscribe((usersAll:any)=>{
      this.usersAll = usersAll;
      
    })
   
    this.userService.getRepo("cheeks-cloud").subscribe((reposAll:any)=>{
      this.reposAll = reposAll;
     
    })

    
  }

}
