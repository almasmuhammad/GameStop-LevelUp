import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { UserContextService } from '../../../services/userContext/user-context.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  constructor(public _userContextService: UserContextService) { }

  ngOnInit() {
  }

}
