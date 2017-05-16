import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyStuffRoutingModule } from './my-stuff-routing.module';

import { MyStuffComponent } from './my-stuff.component';

@NgModule({
  imports: [
    CommonModule,
    MyStuffRoutingModule
  ],
  declarations: [
    MyStuffComponent]
})
export class MyStuffModule { }
