import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error: string = '';
  username: string = ''
  password: string = ''

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }
  register(): void {
    if (this.username == '' || this.password == '') {
      this.showError("Please all fields are required")
      return;
    }

    this.apiService.register({username: this.username, password: this.password}).subscribe({
      next:(response: any)=>{
        const regRes = response.message
        console.log("Registeation Message:", regRes)
        this.router.navigate(['/login'])
      },
      error: (error: any)=>{
        console.log(error)
        this.showError(error.response?.data.message || "Registration Failed");
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
