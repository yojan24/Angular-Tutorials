import { InjectionToken } from '@angular/core';

export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export const TASK_STATUS_OPTOINS = new InjectionToken<
  {
    value: string;
    taskStatus: string;
    text: string;
  }[]
>('task-status-options');

export const taskStatusOption = [
  {
    value: 'open',
    taskStatus: 'OPEN',
    text: 'Open',
  },
  {
    value: 'in-progress',
    taskStatus: 'IN_PROGRESS',
    text: 'In-Progress',
  },
  {
    value: 'done',
    taskStatus: 'DONE',
    text: 'Done',
  },
];

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
