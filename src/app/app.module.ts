import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { Parent1Component } from './scenario3/parent1/parent1.component';
// import { Child1Component } from './scenario3/child1/child1.component';
// import { Scenario1Component } from './scenario1/scenario1.component';
// import { Scenario2Component } from './scenario2/scenario2.component';
// import { Parent2Component } from './scenario4/parent2/parent2.component';
// import { Child2Component } from './scenario4/child2/child2.component';
// import { Parent3Component } from './scenario5/parent3/parent3.component';
// import { Child3aComponent } from './scenario5/child3a/child3a.component';
// import { Child3bComponent } from './scenario5/child3b/child3b.component';
// import { Parent6Component } from './scenario6/parent6/parent6.component';
// import { Child6aComponent } from './scenario6/child6a/child6a.component';
// import { Child6bComponent } from './scenario6/Child6b/child6b.component';
import { Scenario1Module } from './scenario1/scenario1.module';
import { Scenario2Module } from './scenario2/scenario2.module';
import { Scenario3Module } from './scenario3/scenario3.module';
import { Scenario4Module } from './scenario4/scenario4.module';
import { Scenario5Module } from './scenario5/scenario5.module';
import { Scenario6Module } from './scenario6/scenario6.module';
import { Scenario7Module } from './scenario7/scenario7/scenario7.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Scenario1Module,
    Scenario2Module,
    Scenario3Module,
    Scenario4Module,
    Scenario5Module,
    Scenario6Module,
    Scenario7Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
