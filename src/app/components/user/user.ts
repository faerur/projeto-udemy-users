import { Component, computed, EventEmitter, Input, input, Output} from '@angular/core';




@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
})
export class User {
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) id!: string;
  @Output() selectUser = new EventEmitter();
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => {return "assets/users/" + this.avatar()});

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  getUserTask() {
    this.selectUser.emit(this.id);
  }
}
