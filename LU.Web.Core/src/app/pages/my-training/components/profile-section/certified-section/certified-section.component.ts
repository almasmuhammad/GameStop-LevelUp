import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certified-section',
  templateUrl: './certified-section.component.html',
  styleUrls: ['./certified-section.component.css']
})
export class CertifiedSectionComponent implements OnInit {
certified= true;
  constructor() { }

  ngOnInit() {
  }

}
