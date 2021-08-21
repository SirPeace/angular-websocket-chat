import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../chat.component';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  @Input() message: Message;

  constructor() {
    this.message = {
      text: '',
      userName: '',
    };
  }

  avatarURL = 'assets/default-avatar.png';

  ngOnInit(): void {}
}
