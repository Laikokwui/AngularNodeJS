import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-customercreate',
  templateUrl: './customercreate.component.html',
  styleUrls: ['./customercreate.component.css']
})

export class CustomercreateComponent implements OnInit {
  customerForm: FormGroup;

  constructor( 
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private customerService: CustomerService
    ) { 
    this.customerForm = this.formBuilder.group({
      fullName: [''],
      phone: [''],
      address: ['']
    })
  }

  ngOnInit() {}

  onSubmit(): any {
    this.customerService.addCustomer(this.customerForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/customer'))
      }, (err) => {
        console.log(err);
    });
  }

}
