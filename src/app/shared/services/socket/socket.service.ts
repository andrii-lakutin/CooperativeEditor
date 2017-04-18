import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {

  socket: any;

  constructor() { }

  connect() {
    this.socket = io(':3000');
  }

}
