import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-panel',
  templateUrl: './logout-panel.component.html',
  styleUrls: ['./logout-panel.component.css']
})
export class LogoutPanelComponent implements OnInit {
  name: string;
  constructor(private storage: StorageService,
              private router: Router ) { }

  ngOnInit() {
    this.name = this.storage.getValue('name');
  }

  goto(url: string) {
    this.router.navigateByUrl(url);
  }

  logout() {
    this.storage.removeKey('name');
    this.storage.removeKey('token');
    this.goto('');
  }
}
