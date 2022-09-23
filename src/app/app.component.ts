import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'GettingStarted'
  name = 'Home Page'
  date = new Date().getFullYear();

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private metaTagService: Meta
  ) {}

  ngOnInit() {
    this.titleService.setTitle("App Default - GettingStarted");
  
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Angular GettingStarted, App Default, Angular App page' },
      { name: 'author', content: 'Lai kok Wui' },
      { charset: 'UTF-8' }
    ], true);

    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
  }
}
