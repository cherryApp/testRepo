import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: object = {
    HELLO: "Hello App",
    LIST: "List Page"
  }
  getMessage(key: string): string {
    return this.messages[key];
  }
}
