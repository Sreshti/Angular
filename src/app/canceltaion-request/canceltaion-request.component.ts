import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { BookingService } from "../booking.service";
import { Booking } from "../booking";
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-canceltaion-request',
  templateUrl: './canceltaion-request.component.html',
  styleUrls: ['./canceltaion-request.component.css']
})
export class CanceltaionRequestComponent implements OnInit {
  id:number;
   booklist: Observable<Booking[]>;
   private book:Booking;
  constructor(private route: ActivatedRoute, private router: Router, private bookingService: BookingService) { 
    
  }

  ngOnInit(): void {
  
  this.reloadData();
}
onSubmit(value : Booking){
  this.book=new Booking();
  
  console.log("Value is" +value);
  this.id = value.booking_id;
  this.book.paymentstatus=2;
  this.book.customer=value.customer;
  this.book.movies=value.movies;
  this.book.bookingDate=value.bookingDate;
  this.book.numberOfTickets=value.numberOfTickets;
  this.book.price_movie=value.price_movie;
  this.updateBooking();
  this.reloadData();
}
reloadData(){
  this.booklist = this.bookingService.getBookingList();
}

gotoBookinglist(){
  this.router.navigateByUrl('http://localhost:4200/cancelTicket');
}

updateBooking(){
 
  this.bookingService.updateBooking(this.id,this.book).subscribe(data=>console.log(data),error=>console.log(error));
  this.book=new Booking();
  this.reloadData();
  this.gotoBookinglist();
  
}

}
