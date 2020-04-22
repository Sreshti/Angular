import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

import { MoviesService } from "../movies.service";
import { Movies } from "../movies"
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {

  id: number;
  movie: Movies;
  movies: Observable<Movies[]>;

  constructor(private route: ActivatedRoute, private router: Router, private movieService: MoviesService) { }


  ngOnInit(): void {
    this.movie = new Movies();
    this.id = this.route.snapshot.params['id'];
    this.movieService.getMovie(this.id).
      subscribe(data => { console.log(data), this.movie = data; }, error => console.log(error)
      );
  }

  onSubmit() {
    this.updateMovies();
  }
  reloadData() {
    this.movies = this.movieService.getMoviesList();
  }
  gotoList(){
    this.router.navigate(['/allmovie']);
  }
  updateMovies(){
    this.movieService.updateMovie(this.id,this.movie).subscribe(data=>console.log(data),error=>console.log(error));
    this.movie=new Movies();
    this.reloadData();
    this.gotoList();
    
  }
}
