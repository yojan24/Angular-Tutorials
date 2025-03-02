import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MessagesService } from '../messages.service';
import { Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesListComponent implements OnInit, OnDestroy {
  private messageService = inject(MessagesService);

  // private cdRef = inject(ChangeDetectorRef);
  // subscribtion?: Subscription;
  // messages: string[] = [];

  //alternative way

  messages$ = this.messageService.messages$;

  ngOnInit(): void {
    // this.subscribtion = this.messageService.messages$.subscribe((messages) => {
    //   this.messages = messages;
    //   this.cdRef.markForCheck();
    // });
  }

  // get messages() {
  //   return this.messageService.allMessages;
  // }
  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }

  ngOnDestroy(): void {
    // this.subscribtion?.unsubscribe();
  }
}
