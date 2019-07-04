import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Scenario2Component } from './scenario2.component';

@NgModule({
  declarations: [Scenario2Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    Scenario2Component
  ]
})
export class Scenario2Module { }
