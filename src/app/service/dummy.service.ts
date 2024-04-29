import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  constructor(private http: HttpClient) { }

  getProd(){
    return this.http.get('http://localhost:1000/products')
  }
}
