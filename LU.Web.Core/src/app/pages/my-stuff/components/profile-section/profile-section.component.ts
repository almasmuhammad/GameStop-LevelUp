import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserInfoService } from './services';
import { UserInformationViewModel } from './models';

@Component({
  selector: 'app-profile-section',
  templateUrl: './profile-section.component.html',
  styleUrls: ['./profile-section.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileSectionComponent implements OnInit {

  public model: UserInformationViewModel;
  constructor(private _userInfoService: UserInfoService ) {  }

  ngOnInit() {
    this._userInfoService.getUserInfo().subscribe(
      (model) => {
        this.model = model;
      },
      (error) => {  }
    );
    }

}
