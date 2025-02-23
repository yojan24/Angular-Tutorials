import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  output,
  Output,
} from '@angular/core';

interface USER {
  name: string;
  id: string;
  avatar: string;
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: USER;
  @Input({ required: true }) isSelected!: boolean;
  @Output() select = new EventEmitter<string>();

  //receive data with signals but this is readOnly
  // newName = input.required<string>();
  // newavatar = input.required<string>();
  // imagePath = computed(() => 'assets/users/' + this.newavatar());

  //This is not a signal it is just replacement of the the output decorator
  //works same as above decorator
  // select = output<string>();

  get imagePath(): string {
    return 'assets/users/' + this.user.avatar;
  }
  onSelect() {
    return this.select.emit(this.user.id);
  }
}
