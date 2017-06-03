import { Component, OnInit, Input } from '@angular/core';
import { UserInformationViewModel } from '../models';

@Component({
  selector: 'app-user-info-section',
  templateUrl: './user-info-section.component.html',
  styleUrls: ['./user-info-section.component.css']
})
export class UserInfoSectionComponent implements OnInit {

@Input() model: UserInformationViewModel;
  constructor() { }

  ngOnInit() {
  }

}
