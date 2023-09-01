import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListModule } from './todo-list/todo-list.module';
import { LearnComponent } from './learn/learn.component';
import { RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LearnComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild([
        {path:"",component:LearnComponent,pathMatch:"full"},
        {path:"todo",component:TodoListComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class SharedModule { }
