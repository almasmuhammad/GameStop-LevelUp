import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-my-profile-avatar',
  templateUrl: './my-profile-avatar.component.html',
  styleUrls: ['./my-profile-avatar.component.css']
})
export class MyProfileAvatarComponent implements OnInit {
  mainAvatar:string = 'assets/img/avatars/full_high_Marvel_Persona_Deadpool.png';

  constructor() { }

  ngOnInit() {
  }

}
