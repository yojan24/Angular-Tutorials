import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogsService {
  log(message: String) {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}]: ${message}`);
  }
}
