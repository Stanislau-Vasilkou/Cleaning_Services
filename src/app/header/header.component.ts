import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() onSetName = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  setName(name: string) {
    this.onSetName.emit();
  }
}
