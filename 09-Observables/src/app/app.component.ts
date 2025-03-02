import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval, map, Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  clickCount = signal(0);

  clickCount$ = toObservable(this.clickCount);
  interval$ = interval(1000);

  intervalSignal = toSignal(this.interval$, { initialValue: 1 });
  //auto destroy or unSubscribe option provided

  private destoryRef = inject(DestroyRef);

  //creating Observable

  customInterval$ = new Observable((Subscriber) => {
    let interval = 1;
    const intervalOP = setInterval(() => {
      if (interval > 4) {
        clearInterval(interval);
        Subscriber.complete();
        return;
      }
      Subscriber.next({ message: 'Done' });
      interval++;
    }, 1000);
  });

  constructor() {
    // effect(() => {
    //   console.log(`Clicked ${this.clickCount()} times`);
    // });
  }
  ngOnInit(): void {
    // const subscribe = interval(1000)
    //   .pipe(map((val) => val * 2))
    //   .subscribe({
    //     next: (val) => console.log(val),
    //     // complete: () => console.log('Completed'),
    //     // error
    //   });
    // this.destoryRef.onDestroy(() => {
    //   subscribe.unsubscribe();
    // });

    //converting signal to observable

    const subscribe = this.clickCount$.subscribe({
      next: (val) => console.log(`Clicked ${this.clickCount()} times`),
    });
    this.destoryRef.onDestroy(() => {
      subscribe.unsubscribe();
    });

    this.customInterval$.subscribe({
      next: (val) => console.log(val),
      complete: () => console.log('Completed'),
    });
  }

  onClick() {
    this.clickCount.update((prev) => prev + 1);
  }
}
