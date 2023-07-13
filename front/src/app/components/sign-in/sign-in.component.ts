import { Component, OnInit, HostBinding } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

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

  signIn(email: any, pass: any){
    
    this.usersService.getSpecificUser(email).subscribe(
      res =>{
        this.user= {
          id: 0,
          name: '',
          username: '',
          password: '',
          email: '',
        };
        this.router.navigate(['posts']);
      },
      err =>{
        console.error(err)}
    );
  }

}
