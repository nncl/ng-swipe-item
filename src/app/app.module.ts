import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as Hammer from 'hammerjs';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// declare var Hammer: any;

export class MyHammerConfig extends HammerGestureConfig {
  overrides = {
    swipe: {direction: Hammer.DIRECTION_ALL},
  } as any;

  buildHammer(element: HTMLElement) {
    const mc = new Hammer(element, {
      touchAction: 'pan-y'
    });
    return mc;
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
