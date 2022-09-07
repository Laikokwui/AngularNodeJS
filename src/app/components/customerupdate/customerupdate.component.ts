import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-customerupdate',
  templateUrl: './customerupdate.component.html',
  styleUrls: ['./customerupdate.component.css']
})

export class CustomerupdateComponent implements OnInit {
  getId: any;
  updateForm: FormGroup;

  constructor( 
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService
    ) { 
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.customerService.getCustomer(this.getId).subscribe(res => {
      this.updateForm.setValue({
        name: res['name'],
        price: res['price'],
        description: res['description']
      });
    });

    this.updateForm = this.formBuilder.group({
      fullName: [''],
      phone: [''],
      address: ['']
    })
  }

  ngOnInit() {}

  onSubmit(): any {
    this.customerService.updateCustomer(this.getId, this.updateForm.value)
    .subscribe(() => {
        console.log('Data Updated successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/customer'))
      }, (err) => {
        console.log(err);
    });
  }

}
