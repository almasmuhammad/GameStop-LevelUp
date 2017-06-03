import { Component, OnInit, Input } from '@angular/core';
import { UserInformationViewModel } from '../../models';

@Component({
  selector: 'app-xp-progressbar',
  templateUrl: './xp-progressbar.component.html',
  styleUrls: ['./xp-progressbar.component.css']
})
export class XpProgressbarComponent implements OnInit {
@Input() userModel: UserInformationViewModel;
public xpPercentage: number;
  constructor() { }

  ngOnInit() {
    let percentage = 0;
    if (this.userModel) {
      if (this.userModel.upperThreshold > 0) {
        percentage = (this.userModel.currentXp / this.userModel.upperThreshold) * 100;
      }
    }
    this.xpPercentage = percentage;
  }

}
