import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  link='http://localhost:3000/api/Users'
  constructor(private http :HttpClient) 
  { }
  login(credentials:any){
    return this.http.post(this.link+'/login',credentials) ; 
  }
 isLogged(){
  return !! localStorage.getItem('token') 
 }
  logout() {
    localStorage.removeItem('token')
  }
}
