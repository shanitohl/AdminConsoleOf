import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.baseUrl + "organizations/";// 'http://localhost:22447/api/organizations/';
  }


  getAllInvoices(parms: any): Promise<any> {
    console.log(parms);
    return this.httpClient.post<any>(this.baseUrl + "invoices", parms).toPromise();
  }
}
