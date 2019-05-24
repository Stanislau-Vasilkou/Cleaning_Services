import { Component, DoCheck, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.css']
})
export class LoginPanelComponent implements OnInit  {
  name: string;

  constructor(private storage: StorageService,
              private router: Router) {
  }

  ngOnInit() {
  }
}
