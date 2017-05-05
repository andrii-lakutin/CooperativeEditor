import { NgModule } from '@angular/core';

import { BEService, RouterService } from './';

@NgModule({
    providers: [
        BEService,
        RouterService
    ]
})
export class SharedModule {}
