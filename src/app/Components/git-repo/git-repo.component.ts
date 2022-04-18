import { Component, OnInit,Input } from '@angular/core';
import{ GithubServiceService  } from 'src/app/Services/github-service.service'
import{ Repo } from 'src/app/Classes/repo';
import{ User } from 'src/app/Classes/user';
import { NgForm,NgModel } from '@angular/forms';

@Component({
  selector: 'app-git-repo',
  templateUrl: './git-repo.component.html',
  styleUrls: ['./git-repo.component.css']
})
export class GitRepoComponent implements OnInit {

  @Input () repoName!: string
  @Input () repoUrl!: string
  @Input () repoDescription!: string
  @Input () repoHomepage!: string


  constructor(  ) { }

  ngOnInit(): void {
  }







}
