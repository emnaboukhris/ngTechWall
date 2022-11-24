import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authentificationService : AuthentificationService, 
    private router : Router
  ) { 

  }
login(credentials:any) {
  this.authentificationService.login(credentials).subscribe(
    (response)=> {
      const token ="test" ; 
      const link = ['cv']; 
      localStorage.setItem('token',token) ; 
      this.router.navigate(link) ; 

    },(error)=>{
      console.log(error) ; 
    }
  )
}
  ngOnInit(): void {
  }


}
