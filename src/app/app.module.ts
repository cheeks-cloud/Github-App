import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { GithubHomeComponent } from './Components/github-home/github-home.component';
import { GithubUserComponent } from './Components/github-user/github-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GithubHomeComponent,
    GithubUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
