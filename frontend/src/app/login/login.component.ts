import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: string = '';
  username: string = ''
  password: string = ''
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }
  login(): void {
    if (this.username == '' || this.password == '') {
      this.showError("Please all fields are required")
      return;
    }

    this.apiService.login({username: this.username, password: this.password}).subscribe({
      next:(response: any)=>{
        const token = response.token
        console.log("Login Token:", token)
        localStorage.setItem('token', token)
        this.apiService.triggerRefresh();
        this.router.navigate(['/profile'])
      },
      error: (error: any)=>{
        console.log(error)
        this.showError(error.error?.message || "Login Failed");
      }
    })
  }

  private showError(errMes: string): void {
    this.error = errMes;
    setTimeout(()=>{
      this.error = ''
    }, 3000)
  }
}
