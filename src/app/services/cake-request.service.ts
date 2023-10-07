import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CakeReqest } from '../Models/cake-request';

@Injectable({
  providedIn: 'root'
})
export class CakeRequestService {
  URL: string = "http://localhost:3000/cakeRequest";
  constructor(private http: HttpClient) { }

  getAllCakeReqeusts() : Observable<Array<CakeReqest>> {
    return this.http.get<Array<CakeReqest>>(`${this.URL}`);
  }

  saveCakeRequest(tourRequest? : CakeReqest) : Observable<CakeReqest> {
    return this.http.post<CakeReqest>(`${this.URL}`, tourRequest)
  }
}
