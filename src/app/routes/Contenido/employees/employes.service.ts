import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  myAppUrl: string = environment.endpoint;
  constructor(private httpclient: HttpClient) {}

  public GetAllEmployees(): Observable<any>{
    return this.httpclient.get(`${this.myAppUrl}${'Employees/All'}`);
  }

  public GetEmployeeById(Id: number): Observable<any>{
    return this.httpclient.get(`${this.myAppUrl}${'Employees/Id?id='}${Id}`);
  }





}
