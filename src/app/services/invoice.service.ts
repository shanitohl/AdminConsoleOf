import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  baseUrl: string;

  urlKeyCloack: string;
  clientId: string;
  refreshToken: string;
  urlApiKeyCloack: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:22447/api/document';//'https://jsonplaceholder.typicode.com/posts';
    this.urlKeyCloack = 'https://sso-sso.b9ad.pro-us-east-1.openshiftapps.com/auth/realms/innpath';
    this.clientId = "openfact-web-console";
    this.refreshToken = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJjR1lKa0l3a3FMR1VJbkNzNzBhVFJndS1ua2dCZndOem9OQmVoeFZyNVpvIn0.eyJqdGkiOiI1ZTcyZjBmMC1jZTNjLTQxNmEtYWZlYi1hODdhMmFhMjMwYjEiLCJleHAiOjAsIm5iZiI6MCwiaWF0IjoxNTk0MTcyMjkzLCJpc3MiOiJodHRwczovL3Nzby1zc28uYjlhZC5wcm8tdXMtZWFzdC0xLm9wZW5zaGlmdGFwcHMuY29tL2F1dGgvcmVhbG1zL2lubnBhdGgiLCJhdWQiOiJvcGVuZmFjdC13ZWItY29uc29sZSIsInN1YiI6Ijc5NjUyMWE5LWY5YTEtNGQxNy1hNTYzLWY1YzM3YTczMDUwNyIsInR5cCI6Ik9mZmxpbmUiLCJhenAiOiJvcGVuZmFjdC13ZWItY29uc29sZSIsIm5vbmNlIjoiMjFjODJjZmEtMjFhOS00MDZjLTljOTMtYTMwYzYyMDA0MmFmIiwiYXV0aF90aW1lIjowLCJzZXNzaW9uX3N0YXRlIjoiYmQwODc3MjUtYTMyYS00ZDU5LThkNjQtN2E0YTRhMjhkY2MzIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9yZ2FuaXphdGlvbi1tYW5hZ2VyIiwib2ZmbGluZV9hY2Nlc3MiLCJhZG1pbiIsIm9yZ2FuaXphdGlvbi11c2VyIiwidW1hX2F1dGhvcml6YXRpb24iLCJvcmdhbml6YXRpb24tYWNjb3VudGFudCJdfSwicmVzb3VyY2VfYWNjZXNzIjp7Im9wZW5mYWN0Ijp7InJvbGVzIjpbIm1hbmFnZS1ldmVudHMiLCJtYW5hZ2Utb3JnYW5pemF0aW9uIiwidmlldy1ldmVudHMiLCJ2aWV3LWRvY3VtZW50cyIsImNyZWF0ZS1vcmdhbml6YXRpb24iLCJtYW5hZ2UtZG9jdW1lbnRzIiwidmlldy1vcmdhbml6YXRpb24iXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwgb2ZmbGluZV9hY2Nlc3MifQ.ItzIri3ANdUzyyNHIN6CKmwLfIpLQMheVxOpAFG9cTwj65u4nkTjjbPosSSeOaR32eWO82esJpwIc_qI2qxgirr71VQiSyANwu3NleZchHtYmBmdRe1PXSma5g9A6q1NlnWdO8ZzYLmNSyWBEOJwAMhikpSTQV_txgsApAEeUz2VlZwmHoaz-OSeWzKChK1LbC9eeiIhS4cCpOXqE4BxjeI5xVPW_vU9Ps1UY2350eq4mw_lVNY292KrrGMz8BHupGV-moBNuAjL2zB1JH2WUrvgHfsfGsFOPui7O6XD-hH9CXdfquyGzmY3TQM9hz8upRbr64dKy_oykkFgyEid-g";
    this.urlApiKeyCloack = this.urlKeyCloack + "/protocol/openid-connect/token";
  }

  getToken() {
    this.httpClient.post<any>(this.urlApiKeyCloack, { grant_type: "refresh_token", refresh_token: this.refreshToken, client_id: this.clientId }).subscribe(data => {
      console.log(data);
    });
  }

  getAll(pagenation: any): Promise<any> {
    console.log(pagenation);
    //this.getToken();
    return this.httpClient.get<any>(this.baseUrl + "?pageNumber=" + pagenation.page + "&pageSize=" + pagenation.size).toPromise();
  }
}
