import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: string = ''

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getUsername();
  }

  getUsername():void{
    const token = localStorage.getItem('token');
    console.log("Token is: " + token)
    const header:any = {headers: {Authorization:`Bearer ${token}`}}
    this.apiService.getProfileDetails(header).subscribe({
      next:(response: any)=>{
        console.log(response.username)
        this.username = response.username
      },
      error:(error: any)=>{
        this.username = error?.error.message || "An Unrecognized error occured";
      }
    })
  }

}
