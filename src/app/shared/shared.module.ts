import { NgModule } from '@angular/core';

import { SocketService } from './services/socket/socket.service';
import { RouterService } from './services/router/router.service';

@NgModule({
    providers: [
        SocketService,
        RouterService
    ]
})
export class SharedModule {}
