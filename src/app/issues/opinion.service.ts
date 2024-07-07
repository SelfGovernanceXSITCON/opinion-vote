import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpinionService {
  private apiUrl = 'http://localhost:3000/api/opinion';

  constructor(private http: HttpClient) {}

  getOpinions(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
