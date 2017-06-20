import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'rxjs/Rx'; // this can be thinned out
import { Observable } from 'rxjs/Rx';

const debuggerOn = true;

Observable.prototype.debug = function (message: string, thisOn: boolean) {
  return this.do(
    (nextValue: any) => { if (debuggerOn && thisOn) console.log(message, nextValue) },
    (error: Error) => { if (debuggerOn && thisOn) console.error(message, error) },
    () => { if (debuggerOn && thisOn) console.log('Observable completed - ', message) }
  );
};

// add debug operator type by extending the Observable
declare module 'rxjs/Observable' {
  interface Observable<T> {
    debug: (...any: any[]) => Observable<T>;
  }
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
