import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreConfig } from './core-config';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: []
})
export class CoreModule {

constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(config: CoreConfig): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        {provide: CoreConfig, useValue: config }
      ]
    };
  }
}
