import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar-section',
  templateUrl: './avatar-section.component.html',
  styleUrls: ['./avatar-section.component.css']
})
export class AvatarSectionComponent implements OnInit {


  mainAvatar = 'assets/img/avatars/full_high_Marvel_Persona_Deadpool.png';
  constructor() { }

  ngOnInit() {
  }

}
