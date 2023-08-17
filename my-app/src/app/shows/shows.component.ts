import { Component, OnInit } from '@angular/core';
import { User } from '../userInterface';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {
  isSameUser = true;
  editUser: User = {
    id: -1,
    name: '',
    phone: '',
    email: '',
  };

  constructor(public newServis: ServiceService) {}

  ngOnInit(): void {}

  edit(user: User, i: number) {
    this.editUser = {
      id: user.id,
      name: user.name,
      phone: user.phone,
      email: user.email,
    };

    if (this.editUser.id === user.id) {
      this.isSameUser = true;
    }
    this.isSameUser = false;

    this.newServis.users[i].editMode = true;
  }

  save(user: User, i: number) {
    console.log(this.editUser , this.isValidEmail(this.editUser.email),this.isValidPhone(this.editUser.phone));
      const indexExist = this.newServis.users.findIndex((x) => x.id === user.id);
      if(!this.isValidPhone(this.editUser.phone)){
      alert("the phont not valid")
      user.editMode = true;
      this.isSameUser =false
      }
      else if(!this.isValidEmail(this.editUser.email)){
        alert("the email not valid")
        user.editMode = true;
        this.isSameUser =false
      }
      else if (indexExist !== -1 ) {
        this.newServis.users.splice(indexExist, 1, this.editUser)
        user.editMode = false;
        this.isSameUser = true
      } 
  else{
      alert("the email and phone not valid valid")
      user.editMode = true;
      this.isSameUser =false
  }
  }
  cancel(user: User) {
    user.editMode = false;
    this.isSameUser = true;
  }

  delete(u: User, i: number) {
    if (u.id === this.editUser.id) {
      if (this.newServis.users[i] === u) {
        this.newServis.users.splice(i, 1);
        this.isSameUser = true;
      }
    }
    console.log(i, this.newServis.users);
  }

  isValidEmail(email: string): boolean {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
  }

  isValidPhone(phone: string): boolean {
    return /^[0-9]+$/.test(phone);
  }
  
}