import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../services/menu.service';
import { Menu } from '../../../interfaces/Menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menu: Menu[] = [];
  constructor(private _menuService:MenuService ) { }

  ngOnInit(): void {
    this.loandingMenu();
  }
  loandingMenu() {
    this._menuService.getMenu().subscribe(data => {
      this.menu = data;
    })
  }
}
