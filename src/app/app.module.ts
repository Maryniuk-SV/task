import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

import { AuthModule } from './auth/auth.module';
import { SystemModule } from './system/system.module';
import { AppRoutingModule } from "./app-routing.module";
import { SystemRoutingModule } from './system/system-routing.module';
import { EmployeeService } from './shared/service/employee.service';
import { ApiService } from './shared/service/api.service';
import { UsersService} from './shared/service/users.service';

import { AppComponent } from './app.component';
import { DialogComponent } from './shared/modal/dialog/dialog.component';
import { CreateComponent } from './shared/modal/create/create.component';
import { DeleteComponent } from './shared/modal/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    CreateComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    AuthModule,
    SystemModule,
    SystemRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [
    EmployeeService,
    ApiService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
