import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
@Input() offText: string;
@Input() onText: string;
@Input() isOn = false;

  constructor() { }

  ngOnInit() {
  }

}
