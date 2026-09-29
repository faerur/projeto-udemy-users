import { Component, computed, EventEmitter, Input, input, Output} from '@angular/core';

interface UserInt{
  id: string;
  avatar: string;
  name: string;
}


@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
})
export class User {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Input({ required: true }) id!: string;
  @Input({ required: true }) user!: UserInt;
  @Output() selectUser = new EventEmitter<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => {return "assets/users/" + this.avatar()});

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  getUserTask() {
    this.selectUser.emit(this.user.id);
  }
}
