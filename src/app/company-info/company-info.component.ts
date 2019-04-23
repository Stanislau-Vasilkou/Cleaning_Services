import { Component, OnInit } from '@angular/core';
import {cleaningTypes} from '../cleaningTypes';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {
  cleaningTypes: string[];
  constructor() { }

  ngOnInit() {
    this.cleaningTypes = cleaningTypes;
  }

}
