import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-logout-panel',
  templateUrl: './logout-panel.component.html',
  styleUrls: ['./logout-panel.component.css']
})
export class LogoutPanelComponent implements OnInit {
  id: string;
  currentUser: Client;

  constructor(private storage: StorageService,
              private router: Router,
              private clientService: ClientService) {
  }

  ngOnInit() {
    this.clientService.getUserData(this.id);
    this.currentUser = this.clientService.currentUser;
  }

  goto(url: string) {
    this.router.navigateByUrl(url);
  }

  logout() {
    this.storage.removeKey('id');
    this.storage.removeKey('token');
    this.goto('');
  }
}
