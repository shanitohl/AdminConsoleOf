import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { User } from './models/user.model';
import { AuthenticationService } from './services/authentication.service';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PointSales';
  currentUser: User;
  isUserLoggedIn: boolean;

  arrPost: any[];

  constructor(private router: Router,
    private postsService: PostsService,
    private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x)
    this.isUserLoggedIn = false;
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.postsService.getAll()
    //   .then(post => this.arrPost = post)
    //   .catch(error => console.log(error));
    this.validUser();
    //Toggle Click Function
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

  onClick(pRuta: string) {
    this.router.navigate([pRuta]);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
    this.validUser()
  }

  validUser() {
    if (this.authenticationService.currentUserValue) {
      this.isUserLoggedIn = true;
    }
  }
}
