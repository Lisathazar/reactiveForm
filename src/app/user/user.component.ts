import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { User } from '../user';
import { FormBuilder } from '@angular/forms';

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

    userForm = new FormGroup({
      username: new FormControl(''),
      // Gestion de l'adresse avec un FormGroup imbriqué
      credentials: new FormGroup({
         email: new FormControl(''),
          password: new FormControl(''),
      })
 });


  constructor(private fb: FormBuilder) { }

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
  onSubmit() {
    console.log(this.userForm.value);
}


}
