import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() public title: string;
  @Input() public isUserLoggedIn: boolean;

  constructor(private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    console.log("usuario logeado: " + this.isUserLoggedIn);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['login']);
    this.isUserLoggedIn = false;
  }

}
