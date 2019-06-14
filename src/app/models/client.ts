export class Client {
  name?: string;
  email?: string;
  phone?: string;
  password: string;
  role?: string;
  id?: string;
  googleId?: string;
  facebooId?: string;
  photo?: string;
  constructor() {
    this.email = null;
    this.name = null;
    this.phone = null;
    this.password = null;
    this.role = null;
    this.photo = null;
  }
}
