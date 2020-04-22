import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { MoviesService } from "../movies.service"
import { Movies } from "../movies";
import { Router } from "@angular/router"

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {

  movies: Observable<Movies[]>;

  constructor(private moviesService: MoviesService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();

  }
  reloadData() {
    this.movies = this.moviesService.getMoviesList();
  }
  movieDetails(id: number) {
    this.router.navigate(['movieDetail', id]);
  }
  editMovies(id: number) {
    this.router.navigate(['updateMovie', id]);
  }

  deleteMovies(id: number) {
    this.moviesService.deleteMovie(id).subscribe(data => {
      console.log(data);
    }, error => console.log(error));
  }

}
