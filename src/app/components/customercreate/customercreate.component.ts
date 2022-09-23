import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Title, Meta } from '@angular/platform-browser';

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
    private customerService: CustomerService,
    private titleService: Title,
    private metaTagService: Meta
    ) { 
    this.customerForm = this.formBuilder.group({
      fullName: [''],
      phone: [''],
      address: ['']
    })
  }

  ngOnInit() {
    this.titleService.setTitle("Create Customer - GettingStarted");
  
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Angular GettingStarted, Create Customer, Angular Create Customer page' },
      { name: 'author', content: 'Lai kok Wui' },
      { charset: 'UTF-8' }
    ], true);
  }

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
