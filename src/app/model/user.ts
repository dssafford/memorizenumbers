export class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  createdDate: string;
  active: string;


  constructor(Id: number, username: string, password: string, firstName: string, lastName: string, email: string,
              createdDate: string, active: string) {

    this.id = Id;
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.createdDate = createdDate;
    this.active = active;
  }

  public static createBlank(): User {
    return new User(-1, '', '', '', '', '', '', '');
  }
}
