import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientService} from '../services/client.service';
import {StorageService} from '../services/storage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  id: string;

  constructor(private route: ActivatedRoute,
              private clientService: ClientService,
              private storage: StorageService,
              private router: Router) {
    if ( this.route.snapshot.params.id !== undefined && !this.storage.getValue('id') ) {
      this.id = this.route.snapshot.params.id;
      this.storage.setKey('id', this.id);
      this.clientService.getUserData(this.id);
      this.router.navigateByUrl('activeOrders');
    }
  }

  ngOnInit() {

  }

}
