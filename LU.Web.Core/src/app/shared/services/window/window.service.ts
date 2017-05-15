import { Injectable } from '@angular/core';

import { environment } from '../../../../environments/environment';

@Injectable()
export class WindowService {

  constructor() { }

  redirectToSSO() {
    window.location.href = environment.loginURL;
  }
}
