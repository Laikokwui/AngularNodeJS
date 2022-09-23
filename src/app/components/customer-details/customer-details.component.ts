import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
})
export class CustomerDetailsComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle("View Customer Detail - GettingStarted");
  
    this.metaTagService.updateTag({ 
      name: 'keywords', content: 'Angular GettingStarted, View Customer Detail, Angular View Customer Detail' 
    });
  }

}
