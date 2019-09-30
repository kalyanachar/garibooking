import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private http: HttpClient
  ) { }

  carTypeList(): Observable<any> {
    return this.http.get(environment.apiEndpoint + 'users/listCarType')
  }
  companyDetails(): Observable<any> {
    return this.http.get(environment.apiEndpoint + 'users/companyDetails')
  }
  cmsDetails(id): Observable<any> {
    return this.http.get(environment.apiEndpoint + 'users/cmsDetails')
  }
  carList(data): Observable<any> {
    return this.http.post(environment.apiEndpoint + 'users/carList',data)
  }
  getCarTypeListDetails(): Observable<any> {
    return this.http.get(environment.apiEndpoint + 'users/cartypeDetails')
  }

  carBook(data): Observable<any> {
    console.log("Data==>",data);
    return this.http.post(environment.apiEndpoint + 'users/bookCar', data)
  }

  carListbyType(data): Observable<any> {
    return this.http.post(environment.apiEndpoint + 'users/carnamebyCarType',data)
  }

 
  
}
