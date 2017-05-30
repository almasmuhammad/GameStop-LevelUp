import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { MyTrainingRoutingModule } from './my-training-routing.module';

import { MyTrainingComponent } from './my-training.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    MyTrainingRoutingModule
  ],
  declarations: [
    MyTrainingComponent
  ]
})
export class MyTrainingModule { }
