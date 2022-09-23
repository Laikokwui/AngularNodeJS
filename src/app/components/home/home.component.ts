import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle("Home Page - GettingStarted");
  
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Angular GettingStarted, Home Page, Angular home page' },
      { name: 'author', content: 'Lai kok Wui' },
      { charset: 'UTF-8' }
    ], true);
  }

}
