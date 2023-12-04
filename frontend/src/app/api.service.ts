import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  private refreshSubject = new Subject<void>();
  refresh = this.refreshSubject.asObservable();

  triggerRefresh(): void {
    this.refreshSubject.next();
  }


  getProducts(): Observable<any> {
    return this.http.get('http://localhost:5500/products');
  }

  register(data: any): Observable<any> {
    return this.http.post('http://localhost:5500/register', data);
  }

  login(data: any): Observable<any> {
    return this.http.post('http://localhost:5500/login', data);

  }
  getProfileDetails(header: any): Observable<any> {
    return this.http.get('http://localhost:5500/profile', header);
  }


}
