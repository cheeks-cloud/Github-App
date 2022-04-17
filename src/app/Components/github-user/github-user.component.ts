import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css']
})
export class GithubUserComponent implements OnInit {

@Input () username!: string
@Input () useravatar! : string
@Input () userfollower!: string
@Input () userfollowing!: string
@Input () userOrganization!: string


@Input () repoName!: string
@Input () repoWatchers!: string
@Input () repoDescription!: string
@Input () repoForks!: number



  constructor( ) { 
   
  }
    
  
  ngOnInit(): void {
  }
   

 
}
