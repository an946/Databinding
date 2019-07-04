import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child1Component } from './child1/child1.component';
import { Parent1Component } from './parent1/parent1.component';

@NgModule({
  declarations: [Child1Component, Parent1Component],
  imports: [
    CommonModule
  ],
  exports: [
    Child1Component,
    Parent1Component
  ]
})
export class Scenario3Module { }
