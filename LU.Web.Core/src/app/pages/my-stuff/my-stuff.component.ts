import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-my-stuff',
  templateUrl: './my-stuff.component.html',
  styleUrls: ['./my-stuff.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MyStuffComponent implements OnInit {

  public loading = true;
  constructor() { }

  ngOnInit() {
    this.loading = false;
  }

}
