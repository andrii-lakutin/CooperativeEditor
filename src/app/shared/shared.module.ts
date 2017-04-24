import { NgModule } from '@angular/core';

import { BEService, RouterService, HelperService } from './';

@NgModule({
    providers: [
        BEService,
        RouterService,
        HelperService
    ]
})
export class SharedModule {}
