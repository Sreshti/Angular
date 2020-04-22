import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { CustomerService } from "../customer.service";
import { Customer } from "../Customer";
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  customers: Observable<Customer[]>;

  constructor(private customerService: CustomerService, private router: Router) { }


  ngOnInit(): void {
  }
  reloadData() {
    this.customers = this.customerService.getCustomerList();
  }
  customerDetails(id:number){
    this.router.navigate(['detail',id])
  }
  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe(data => {
      console.log(data);
    }, error => console.log(error));
  }


}
