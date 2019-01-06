import { Component, ChangeDetectorRef } from '@angular/core';
import { Blog } from '../models/blog';
import { Book } from '../models/book';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private cdRef: ChangeDetectorRef) { }

  searchToggle = false;
  blogs: Blog[] = [
    {
      image: "https://materiell.com/wp-content/uploads/2015/03/doug_full1.png",
      name: "Roy Johnson"
    },
    {
      image: "https://previews.123rf.com/images/juliarstudio/juliarstudio1512/juliarstudio151200350/49020643-man-with-glasses-avatar-simple-icon-for-web-and-mobile-devices.jpg",
      name: "Percy Keller"
    },
    {
      image: "https://ictatnhs.files.wordpress.com/2010/01/my-avatar.jpg",
      name: "Mabel Webber"
    },
    {
      image: "https://media.istockphoto.com/vectors/man-portrait-face-icon-web-avatar-flat-style-vector-vector-id641304238",
      name: "Evan Barrera"
    }
  ];
  books: Book[] = [
    {
      image: "https://images-na.ssl-images-amazon.com/images/I/61eZLnlQmDL._AC_US218_.jpg",
      title: "Happy Cookbook"
    },
    {
      image: "https://images-na.ssl-images-amazon.com/images/I/51K7u3aZoDL._AC_US218_.jpg",
      title: "Tasty Ultimate"
    },
    {
      image: "https://ictatnhs.files.wordpress.com/2010/01/my-avatar.jpg",
      title: "The Complete Cooking for Two"
    },
    {
      image: "https://images-na.ssl-images-amazon.com/images/I/61wDctD4WHL._AC_US218_.jpg",
      title: "Thug Kitchen"
    }
  ];
  onToggleSearch() {
    if (this.searchToggle) {
      this.searchToggle = false;
    } else {
      this.searchToggle = true;
      this.cdRef.detectChanges();
    }
  }

}

