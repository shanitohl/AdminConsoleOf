import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pid } from 'process';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl: string;


  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://jsonplaceholder.typicode.com/posts';
  }

  getAll(): Promise<any[]> {
    return this.httpClient.get<any[]>(this.baseUrl).toPromise();
  }

  getById(pId: number): Promise<any> {
    return this.httpClient.get<any>(this.baseUrl + "/" + pid).toPromise();
  }
}
