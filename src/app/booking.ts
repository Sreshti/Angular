import { Customer } from './Customer';
import { Movies } from './movies';

export class Booking {
    booking_id:number;
    bookingDate:Date;
    price_movie:number;
    paymentstatus:number;
    numberOfTickets:number;
    customer:Customer;
    movies:Movies;
}
