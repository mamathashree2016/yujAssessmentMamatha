import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DirectoryService {
  configUrl = 'https://reqres.in/api/products';
  baseUrl= 'assets/data.json';
  constructor(  private http: HttpClient) { }

  getdirectory() {
    return this.http.get(this.baseUrl);
  }
}
