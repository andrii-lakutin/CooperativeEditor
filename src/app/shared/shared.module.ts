import { NgModule } from '@angular/core';

import { SocketService, RouterService } from './';

@NgModule({
    providers: [
        SocketService,
        RouterService
    ]
})
export class SharedModule {}
