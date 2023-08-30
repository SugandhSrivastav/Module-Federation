import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListModule } from './todo-list/todo-list.module';
import { LearnComponent } from './learn/learn.component';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
  ],
  imports: [
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
