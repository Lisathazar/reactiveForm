import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user :User = new User();

    name = new FormControl('');
    email = new FormControl('');
    password =  new FormControl('');
    street = new FormControl('');
    codePost = new FormControl('');
    town =  new FormControl('');


  constructor() { }

  ngOnInit() {
  }

  confirmForm() {
    this.user.name= this.name.value;
    this.user.email= this.email.value;
    this.user.password= this.password.value;
    this.user.street= this.street.value;
    this.user.codePost= this.codePost.value;
    this.user.town= this.codePost.value;
  }
  
}
