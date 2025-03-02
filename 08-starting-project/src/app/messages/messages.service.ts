import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private messages: string[] = [];
  //   allMessages = this.messages.asReadonly();

  messages$ = new BehaviorSubject<string[]>([]);

  get allMessages() {
    return [...this.messages];
  }

  addMessage(message: string) {
    this.messages = [...this.messages, message];
    this.messages$.next([...this.messages]);
  }
}
