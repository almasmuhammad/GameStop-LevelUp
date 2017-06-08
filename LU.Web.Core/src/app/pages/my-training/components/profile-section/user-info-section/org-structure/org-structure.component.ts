import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-org-structure',
  templateUrl: './org-structure.component.html',
  styleUrls: ['./org-structure.component.css']
})
export class OrgStructureComponent implements OnInit {
  region = 'West';
  regionnumber = 'R10';
  dnumber = 'D224';
  storenumber = 'Store 1782';

  constructor() { }

  ngOnInit() {
  }

}
