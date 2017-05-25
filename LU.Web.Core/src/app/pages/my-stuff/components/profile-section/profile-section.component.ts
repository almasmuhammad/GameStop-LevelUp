import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProfileSectionService } from './profile-section.service';

@Component({
  selector: 'app-profile-section',
  templateUrl: './profile-section.component.html',
  styleUrls: ['./profile-section.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileSectionComponent implements OnInit {
    profile: any;

  constructor(/*private profileSectionService:ProfileSectionService*/) { }

  ngOnInit() {
/*   this.profileSectionService.fetchProfile()
    .subscribe(data => {
      this.profile = data;
    })*/
  }

}
