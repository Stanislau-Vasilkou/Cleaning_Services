import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo-info-panel',
  templateUrl: './logo-info-panel.component.html',
  styleUrls: ['./logo-info-panel.component.css']
})
export class LogoInfoPanelComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
  }

  goTo(url: string) {
    this.router.navigateByUrl(url);
  }
}
