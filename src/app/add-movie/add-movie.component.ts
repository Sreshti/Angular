import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../movies.service";
import { FormsModule } from '@angular/forms';

import { Movies } from "../movies";
import { Router } from "@angular/router";


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  movie: Movies = new Movies();
  submitted = false;

  constructor(private movieService: MoviesService, private router: Router) { }

  ngOnInit(): void {
  }
  newMovie(): void {
    this.submitted = false;
    this.movie = new Movies();
  }
  save() {
    this.movieService.newMovie(this.movie).subscribe(data => console.log(data), error => console.log(error));
    this.movie=new Movies();
    this.gotoList();
  }
onSubmit(){
  this.submitted=true;
  this.save();
}
gotoList(){
  this.router.navigate(['/allmovie']);
}

}
