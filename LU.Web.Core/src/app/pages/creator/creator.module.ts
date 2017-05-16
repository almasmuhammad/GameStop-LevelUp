import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatorRoutingModule } from './creator-routing.module';

import { CreatorComponent } from './creator.component';

@NgModule({
  imports: [
    CommonModule,
    CreatorRoutingModule
  ],
  declarations: [
    CreatorComponent
  ]
})
export class CreatorModule { }
