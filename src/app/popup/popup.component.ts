import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ClientService} from "../services/client.service";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  form: string;

  constructor(private router: Router,
              private clientService: ClientService) {
    this.form = 'login';
  }

  ngOnInit() {
  }

  closeWindow() {
    const parentRoute = this.router.url.replace(/\(popup:\w*\)/, '');
    this.router.navigateByUrl(parentRoute);
  }
}
