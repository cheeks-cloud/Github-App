import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { GithubHomeComponent } from './Components/github-home/github-home.component';
import { GithubUserComponent } from './Components/github-user/github-user.component';
import { GitRepoComponent } from './Components/git-repo/git-repo.component';
import { MeHomepageComponent } from './Components/me-homepage/me-homepage.component';

const routes: Routes = [

{path:'',redirectTo: 'homepage',pathMatch:'full'},
{ path: 'homepage', component: MeHomepageComponent},
{path: 'git-home', component: GithubHomeComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
