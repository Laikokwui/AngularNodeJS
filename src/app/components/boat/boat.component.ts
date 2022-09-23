import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-boat',
  templateUrl: './boat.component.html',
})
export class BoatComponent implements OnInit {
  name = 'Boat Page'

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private metaTagService: Meta
  ) {}

  ngOnInit() {
    this.titleService.setTitle("Boat Page - GettingStarted");
  
    this.metaTagService.updateTag({ 
      name: 'keywords', content: 'Angular GettingStarted, Boat Page, Angular Boat page' 
    });

    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
  }
}
