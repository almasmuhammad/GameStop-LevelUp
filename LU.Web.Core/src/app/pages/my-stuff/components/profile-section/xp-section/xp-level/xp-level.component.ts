import { Component, OnInit, Input } from '@angular/core';
import { UserInformationViewModel } from '../../models';

@Component({
  selector: 'app-xp-level',
  templateUrl: './xp-level.component.html',
  styleUrls: ['./xp-level.component.css']
})
export class XpLevelComponent implements OnInit {
@Input() userModel: UserInformationViewModel;

  constructor() { }

  ngOnInit() {
  }

}
