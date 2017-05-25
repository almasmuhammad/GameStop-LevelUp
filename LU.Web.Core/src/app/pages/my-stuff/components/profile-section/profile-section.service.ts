import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ProfileSectionService {

  constructor(private http: Http) { }

fetchProfile(){
  return this.http
    .get('/assets/profile.json')
    .map(res=> res.json());
}
}
