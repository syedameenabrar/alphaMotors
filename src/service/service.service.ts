import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private http: HttpClient,
  ) { 


  }
  submitRegister(data:any) {
    return this.http.post(`${environment.baseUrl}auth/register`, data).toPromise();
  }
  submitLogin(data:any) {
    return this.http.post(`${environment.baseUrl}auth/login`, data).toPromise();
  }
}
