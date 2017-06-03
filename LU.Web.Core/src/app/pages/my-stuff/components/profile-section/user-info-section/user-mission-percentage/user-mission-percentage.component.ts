import { Component, OnInit, Input } from '@angular/core';
import { UserInformationViewModel } from '../../models';

@Component({
  selector: 'app-user-mission-percentage',
  templateUrl: './user-mission-percentage.component.html',
  styleUrls: ['./user-mission-percentage.component.css']
})
export class UserMissionPercentageComponent implements OnInit {
  @Input() model: UserInformationViewModel;
  constructor() { }

  ngOnInit() {
  }

}
