import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slidePage} from '../animation/routerAnimation';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations: [slidePage]
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
