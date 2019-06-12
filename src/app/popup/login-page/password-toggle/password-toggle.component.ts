import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-password-toggle',
  templateUrl: './password-toggle.component.html',
  styleUrls: ['./password-toggle.component.css']
})
export class PasswordToggleComponent implements OnInit {
  isVisiblePassword = false;
  icon = 'fas fa-eye-slash';
  type =  'password';

  @Output() togglePasswordType = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  togglePassword() {
    this.icon = this.isVisiblePassword ? 'fas fa-eye-slash' : 'fas fa-eye';
    this.type = this.isVisiblePassword ? 'password' : 'text';
    this.togglePasswordType.emit(this.type);
    this.isVisiblePassword = !this.isVisiblePassword;
  }
}
