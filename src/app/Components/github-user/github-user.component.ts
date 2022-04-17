import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css']
})
export class GithubUserComponent implements OnInit {

@Input () username!: {}
@Input () useravatar! : string
@Input () userfollower!: string
@Input () userRepos!: string
@Input () userfollowing!: string
@Input () userOrganization!: string



  constructor( ) { 
   
  }
    
  
  ngOnInit(): void {
  }
   

 
}
