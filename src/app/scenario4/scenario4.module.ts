import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child2Component } from './child2/child2.component';
import { Parent2Component } from './parent2/parent2.component';

@NgModule({
  declarations: [Child2Component, Parent2Component],
  imports: [
    CommonModule
  ],
  exports: [
    Child2Component,
    Parent2Component
  ]
})
export class Scenario4Module { }
