import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private a : Router){}

  uname:any;
  user:any;

  logout(){
    localStorage.removeItem('loginData')
    this.a.navigateByUrl('/')
  }

  ngOnInit(){
    this.user = localStorage.getItem('loginData')
    this.user = JSON.parse(this.user)
    this.uname = this.user.UserName
  }

}
