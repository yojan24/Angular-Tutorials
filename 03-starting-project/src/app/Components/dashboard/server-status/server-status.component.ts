import {
  AfterContentInit,
  Component,
  DestroyRef,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, AfterContentInit {
  currentStatus = signal<'offline' | 'online' | 'unknown'>('offline');
  // private interval?: NodeJS.Timeout;
  //alternative

  private destroy = inject(DestroyRef);

  constructor() {
    //runs when signal value changes
    effect(() => {
      console.log(this.currentStatus);
    });
  }

  ngOnInit(): void {
    console.log('ONINIT');
    const interval = setInterval(() => {
      const end = Math.random();

      if (end < 0.5) {
        this.currentStatus.set('online');
      } else if (end < 0.8) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 3000);

    // this.destroy.onDestroy(() => {
    //   clearInterval(interval);
    // });
  }

  ngAfterContentInit(): void {
    console.log('After Content Init');
  }

  // ngOnDestroy(): void {
  //   clearTimeout(this.interval);
  // }
}
