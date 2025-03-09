import {
  Component,
  computed,
  DestroyRef,
  inject,
  Input,
  input,
  OnInit,
} from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterLink,
  RouterOutlet,
  RouterStateSnapshot,
} from '@angular/router';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit {
  // userId = input.required<string>();

  message = input.required<string>();
  userName = input.required<string>();
  private activatedRoute = inject(ActivatedRoute);

  // private userService = inject(UsersService);
  // private destroyRef = inject(DestroyRef);
  // userName: string | undefined = '';

  //the below approach is not working
  // Id: string = '';
  // @Input({ required: true }) set userId(uId: string) {
  //   this.userName = this.userService.users.find((u) => u.id === uId)?.name;
  // }

  //solutiion of get dynamic route params as via observalbles

  ngOnInit() {
    this.activatedRoute.data.subscribe({
      next: (data) => console.log(data),
    });

    //   // not observalble actual values will be in it but not updated as below will do when value changes
    //   console.log(this.activatedRoute.snapshot);

    //   console.log('static data through route: ', this.message());
    //   const subscribe = this.activatedRoute.paramMap.subscribe({
    //     next: (paramMap) =>
    //       (this.userName = this.userService.users.find(
    //         (u) => u.id === paramMap.get('userId')
    //       )?.name) || '',
    //   });

    //   this.destroyRef.onDestroy(() => subscribe.unsubscribe());
  }

  //with signals
  // userName = computed(
  //   () => this.userService.users.find((user) => user.id === this.userId())?.name
  // );
}

export const resolveUserName: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  const usersService = inject(UsersService);
  const userName =
    usersService.users.find(
      (u) => u.id === activatedRoute.paramMap.get('userId')
    )?.name || '';
  return userName;
};

export const resolveTilte: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  return resolveUserName(activatedRoute, routerState) + "'s task";
};
