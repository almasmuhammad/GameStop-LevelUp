import { Component, OnInit, Input } from '@angular/core';
import { UserInformationViewModel } from '../models';

@Component({
  selector: 'app-xp-section',
  templateUrl: './xp-section.component.html',
  styleUrls: ['./xp-section.component.css']
})
export class XpSectionComponent implements OnInit {

@Input() userModel: UserInformationViewModel;
  constructor() { }

  ngOnInit() {
  }

}
