import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-trained-section',
  templateUrl: './last-trained-section.component.html',
  styleUrls: ['./last-trained-section.component.css']
})
export class LastTrainedSectionComponent implements OnInit {
  
month:number=5;
date:number=27;
year:number=2017;
  constructor() { }

  ngOnInit() {
  }

}
