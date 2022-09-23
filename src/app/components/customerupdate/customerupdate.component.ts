import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Title, Meta } from '@angular/platform-browser';

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
    private customerService: CustomerService,
    private titleService: Title,
    private metaTagService: Meta
    ) { 
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.customerService.getCustomer(this.getId).subscribe(res => {
      this.updateForm.setValue({
        fullName: res['fullName'],
        phone: res['phone'],
        address: res['address']
      });
    });

    this.updateForm = this.formBuilder.group({
      fullName: [''],
      phone: [''],
      address: ['']
    })
  }

  ngOnInit() {
    this.titleService.setTitle("Update Customer Page - GettingStarted");
  
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Angular GettingStarted, Update Customer Page, Angular Update Customer' },
      { name: 'author', content: 'Lai kok Wui' },
      { charset: 'UTF-8' }
    ], true);
  }

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
