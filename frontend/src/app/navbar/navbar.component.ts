import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean = false;

  constructor(private apiService: ApiService, private router:Router) {
    this.checkIfLoggedIn()
  }

  ngOnInit(): void {
    this.apiService.refresh.subscribe(()=>{
      this.checkIfLoggedIn();
    })
  }

  checkIfLoggedIn(){
    const token = localStorage.getItem('token')
    if (token) {
      this.loggedIn = true
    }else{
      this.loggedIn = false;
    }
  }
  logout(): void{
    this.loggedIn = false;
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }

}
