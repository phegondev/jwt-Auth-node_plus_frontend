import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void{
    this.apiService.getProducts().subscribe({
      next:(response: any) =>{
        this.products = response
      },
      error: (error: any) =>{
        console.log("Error Fetching Products: " + error)
      }
    })
  }

}
