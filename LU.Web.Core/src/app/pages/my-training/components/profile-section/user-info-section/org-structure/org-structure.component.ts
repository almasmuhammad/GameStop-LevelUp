import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-org-structure',
  templateUrl: './org-structure.component.html',
  styleUrls: ['./org-structure.component.css']
})
export class OrgStructureComponent implements OnInit {
  region:string="West";
  regionnumber:string="R10";
  dnumber:string="D224";
  storenumber:string="Store 1782"

  constructor() { }

  ngOnInit() {
  }

}
