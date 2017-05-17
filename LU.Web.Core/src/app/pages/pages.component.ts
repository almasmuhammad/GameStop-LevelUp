import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

import { UserContextService } from '../shared/services/userContext/user-context.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor(public _userContextService: UserContextService) { }

  ngOnInit() {
  }

}
