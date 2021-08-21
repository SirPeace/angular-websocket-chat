import { Component, OnInit } from '@angular/core';

export interface Message {
  text: string;
  userName: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  socket = new WebSocket('ws://localhost:8080');
  connection = true;
  messages: Message[] = [];
  newMessage = '';

  onSend(): void {
    this.socket.send(
      JSON.stringify({
        type: 'saveMessage',
        payload: {
          text: this.newMessage,
          userName: 'SirPeace',
        },
      })
    );

    this.newMessage = '';
  }

  handleKeyPress(evt: KeyboardEvent): void {
    if (evt.key === 'Enter') this.onSend();
  }

  ngOnInit(): void {
    this.socket.onerror = () => {
      this.connection = false;
    };

    this.socket.onmessage = ({ data }) => {
      console.log('Server:', data);

      if (Array.isArray(JSON.parse(data))) {
        try {
          const receivedMessages: Message[] = JSON.parse(data);
          this.messages.push(...receivedMessages);
        } catch (e) {
          console.error(e.message);
        }
      } else {
        try {
          const receivedMessage: Message = JSON.parse(data);
          this.messages.push(receivedMessage);
        } catch (e) {
          console.error(e.message);
        }
      }
    };

    this.socket.onopen = () => {
      this.socket.send(JSON.stringify({ type: 'getMessages' }));
    };
  }
}
