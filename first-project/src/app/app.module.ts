import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { Header } from './header/header';
import { SharedModule } from './shared/shared.module';
import { TaskModule } from './task/task.module';
import { User } from './user/user';

@NgModule({
  declarations: [App, Header, User], //Non standalone components
  imports: [BrowserModule, FormsModule, SharedModule, TaskModule], //for standalone components
  bootstrap: [App],
})
export class AppModule {}
