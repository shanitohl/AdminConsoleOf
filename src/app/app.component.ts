import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PointSales';

  arrPost: any[];

  constructor(private router: Router, private postsService: PostsService) {

  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.postsService.getAll()
    //   .then(post => this.arrPost = post)
    //   .catch(error => console.log(error));

                      //Toggle Click Function
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

  onClick(pRuta: string) {
    this.router.navigate([pRuta]);
  }
}
