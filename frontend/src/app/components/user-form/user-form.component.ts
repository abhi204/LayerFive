import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  model = new User();

  submitted = false;
  errors = [];

  constructor(private userService: UserService) { }
  
  onSubmit(){
    this.submitted = true;
    window.scrollTo(0,0);
    this.userService.addUser(this.model)
      .subscribe( data => this.submitSuccess(), error => this.onError(error));
  }

  onError(error){
    this.errors = [];
    if(error.status === 400){
      let errors_object = error.error;
      for(const key in errors_object)
          this.errors.push(`${key}: ${String(errors_object[key])}`);
    }
    else {
      this.errors = ['Unknown error occured, please try again.']
    }
  }
  
  submitSuccess(){
    this.errors = [];
    this.model = new User();
    window.alert("Data Submitted Successfully!");
  }

  ngOnInit() {
  }

}
