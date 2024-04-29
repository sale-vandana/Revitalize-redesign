import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private a:Router){}

  uname : any;
  email : any;
  pwd :any;
  user:any;

  btnclicked(){

    if(this.uname==="vandana" && this.pwd==="vandana2002"){
      this.a.navigateByUrl('/admin/home')

      this.user={
        'UserName' : this.uname,
      }

      localStorage.setItem('loginData',JSON.stringify(this.user))

    }

    else{
      if(this.pwd=="12345"){
        this.a.navigateByUrl('/navbar/home')

        this.user={
          'UserName' : this.uname,
        }
  
        localStorage.setItem('loginData',JSON.stringify(this.user))

      }
      else{
        alert('Incorrect Username/Password')
      }
    }

  }

}
