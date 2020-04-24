import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public loginService:AuthenticationService){ }
  
  title = 'Movie-Booking-System Admin Panal';
  imagePath='/assets/images/cine4.png';
  admin = true;
  
}

