import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-rank',
  templateUrl: './user-rank.component.html',
  styleUrls: ['./user-rank.component.css']
})
export class UserRankComponent implements OnInit {
userrank:string = "epic";
month:number=5;
year:number=2015;
  constructor() { }

  ngOnInit() {
  }

}
