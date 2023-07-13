import { Component, OnInit, HostBinding } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from '../../services/users.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  user: User = {
    id: 0,
    name: '',
    username: '',
    password: '',
    email: '',
  };

  constructor(
    private usersService : UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createUser(){
    
    // Deleted this field since the DataBase creates them AUTO_STYLE.
    delete this.user.id;
    delete this.user.username;

    this.usersService.saveUser(this.user).subscribe(
      res =>{
        this.user= {
          id: 0,
          name: '',
          username: '',
          password: '',
          email: '',
        };
        console.log(res);
        this.router.navigate(['sign-in']);
      },
      err =>{
        console.error(err)}
    );
  }

}
