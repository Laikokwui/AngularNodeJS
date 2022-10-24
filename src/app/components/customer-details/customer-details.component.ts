import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
})
export class CustomerDetailsComponent implements OnInit {
  getId: any;
  customer: Customer;

  constructor (
    private customerService: CustomerService,
    private titleService: Title,
    private metaTagService: Meta,
    private activatedRoute: ActivatedRoute
  ) { 
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.customerService.getCustomer(this.getId).subscribe((res: Customer) => {
      this.customer = res;
      console.log(res);
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle("View Customer Detail - GettingStarted");
  
    this.metaTagService.updateTag({ 
      name: 'keywords', content: 'Angular GettingStarted, View Customer Detail, Angular View Customer Detail' 
    });
  }
}
