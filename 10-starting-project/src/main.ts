import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import {
  HttpEventType,
  HttpHandler,
  HttpHandlerFn,
  HttpRequest,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { tap } from 'rxjs';

function logging(request: HttpRequest<unknown>, next: HttpHandlerFn) {
  console.log('Outgoing Log');
  const req = request.clone({
    headers: request.headers.set('X-debug', 'new-Added'),
  });
  console.log(request);
  return next(request).pipe(
    tap({
      next: (event) => {
        if (event.type === HttpEventType.Response) {
          console.log(event.status);
        }
      },
    })
  );
}

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(withInterceptors([logging]))],
}).catch((err) => console.error(err));
