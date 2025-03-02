import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { TasksService } from './app/tasks/tasks.service';
import { InjectionToken } from '@angular/core';

// export const TaskServiceToken = new InjectionToken<TaskService>('Task-Service-Token');

//if we use above approach then we need to use TaskServiceToken in inject(--here--) and with constructor(@inject() then furhter is same)

//Never use ElementInjector for using service in service won't work

// bootstrapApplication(AppComponent, {
//   providers: [{ provide: TaskServiceToken, useClass: TasksService }],
// }).catch((err) => console.error(err));

bootstrapApplication(AppComponent).catch((err) => console.error(err));
