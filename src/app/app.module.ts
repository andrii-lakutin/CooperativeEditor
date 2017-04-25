import { BrowserModule } from '@angular/platform-browser';
import { NgModule, forwardRef, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';

// Shared folder
import { SharedModule } from './shared/shared.module';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { RoomComponent } from './room/room.component';
// Ace editor
import { AceEditorModule } from 'ng2-ace-editor';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    AceEditorModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
