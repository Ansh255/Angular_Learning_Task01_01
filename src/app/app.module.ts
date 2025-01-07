import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserManagementComponentComponent } from './user-management-component/user-management-component.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    UserManagementComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
