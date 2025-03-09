import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { TaskComponent } from './app/tasks/task/task.component';
import { routes } from './app/app.route';
import { appConfig } from './app/app.config';

// bootstrapApplication(AppComponent, {
//   providers: [
//     provideRouter([
//       {
//         path: '',
//         component: TaskComponent,
//       },
//     ]),
//   ],
// }).catch((err) => console.error(err));

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
