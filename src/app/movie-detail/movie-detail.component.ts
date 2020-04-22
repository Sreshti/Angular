import { Component, OnInit } from '@angular/core';
import{MoviesService} from "../movies.service";
import {Movies} from "../movies"
import {Router,ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  id:number;
  movie:Movies;


  constructor(private route:ActivatedRoute,private router:Router,private movieService:MoviesService ) { }


  ngOnInit(): void {
    this.movie=new Movies();
    this.id=this.route.snapshot.params['id'];
    this.movieService.getMovie(this.id).subscribe(data=>{console.log(data),this.movie=data;}, error => console.log(error));
  
  }
  list(){
    this.router.navigate(['allmovie']);
  }

}
