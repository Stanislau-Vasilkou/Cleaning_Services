export class Client {
  login: string;
  email: string;
  phone: string;
  password: string;
  role?: string;
  id?: string;
  constructor() {
    this.email = null;
    this.login = null;
    this.phone = null;
    this.password = null;
  }
}
