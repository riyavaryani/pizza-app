import { Component, OnInit } from '@angular/core';
import {faSearch, faShoppingCart} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  faPerson = faSearch;


  constructor() { }

  ngOnInit(): void {
  }

}
