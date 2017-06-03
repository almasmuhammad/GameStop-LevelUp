import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { UserContextService } from '../../../services/userContext/user-context.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {


  constructor(
    public _userContextService: UserContextService,
    private translate: TranslateService ) { }

  ngOnInit() {
  }
    changeLang(language: string) {
        this.translate.use(language);
    }
}
