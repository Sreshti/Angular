import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent} from './login/login.component';
import { UserDetailComponent} from './user-detail/user-detail.component';
import { MovieDetailComponent} from './movie-detail/movie-detail.component';
import { UpdateMovieComponent} from './update-movie/update-movie.component';
import { LogoutComponent} from './logout/logout.component';
import {AddMovieComponent} from './add-movie/add-movie.component';
import {AllMoviesComponent} from './all-movies/all-movies.component';
import {CanceltaionRequestComponent} from './canceltaion-request/canceltaion-request.component'


const routes: Routes = [{ path: 'login', component: LoginComponent },
{ path: 'user', component: UserDetailComponent },
{ path: 'allmovie', component: AllMoviesComponent },
{ path: 'addMovies', component: AddMovieComponent },
{ path: 'movieDetail/:id', component: MovieDetailComponent },
{ path: 'updateMovie/:id', component: UpdateMovieComponent },
{ path: 'logout', component: LogoutComponent },
{ path: 'cancelTicket',component:CanceltaionRequestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
