import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Cleaning-Services';
  name: string;

  constructor(private translate: TranslateService,
              private route: ActivatedRoute ) {
    this.translate.use('en');
    this.route.params.subscribe((params) => console.log(params));
  }

  ngOnInit() {
  }
}
