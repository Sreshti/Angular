import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { UserDetailComponent } from './user-detail/user-detail.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';

import { LogoutComponent } from './logout/logout.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { CanceltaionRequestComponent } from './canceltaion-request/canceltaion-request.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    UserDetailComponent,
    MovieDetailComponent,
    UpdateMovieComponent,
 
    LogoutComponent,
    AddMovieComponent,
    AllMoviesComponent,
    CanceltaionRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
