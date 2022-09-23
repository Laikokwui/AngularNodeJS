import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})

export class CustomerlistComponent implements OnInit {
  customers?: Customer[];
  currentCustomer: Customer;
  currentIndex = -1;
  name = '';

  constructor(
    private customerService: CustomerService,
    private titleService: Title,
    private metaTagService: Meta
  ) {}

  ngOnInit(): void {
    this.retrieveCustomers();

    this.titleService.setTitle("Customer List Page - GettingStarted");
  
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Angular GettingStarted, Customer List Page, Angular Customer' },
      { name: 'author', content: 'Lai kok Wui' },
      { charset: 'UTF-8' }
    ], true);
  }

  retrieveCustomers(): void {
    this.customerService.getCustomers()
      .subscribe({
        next: (data) => {
          this.customers = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveCustomers();
    this.currentCustomer = {};
    this.currentIndex = -1;
  }

  setActiveCustomer(customer: Customer, index: number): void {
    this.currentCustomer = customer;
    this.currentIndex = index;
  }

  removeCustomer(id): void {
    this.customerService.deleteCustomer(id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchName(): void {
    this.currentCustomer = {};
    this.currentIndex = -1;
    this.customerService.getCustomers()
      .subscribe({
        next: (data) => {
          this.customers = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
