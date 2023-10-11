import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cake } from '../Models/cake';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CakeService {

  URL: string = 'http://localhost:3000/cake';

  constructor(private http: HttpClient) {}

  getCakes(): Observable<Cake[]> {
    return this.http.get<Cake[]>(this.URL);
  }

  getCake(id?: string): Observable<Cake> {
    return this.http.get<Cake>(`${this.URL}/${id}`)
  }
}
