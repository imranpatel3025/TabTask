import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabTaskNgForComponent } from './components/tab-task-ng-for/tab-task-ng-for.component';

@NgModule({
  declarations: [
    AppComponent,
    TabTaskNgForComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
