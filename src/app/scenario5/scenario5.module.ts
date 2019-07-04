import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child3aComponent } from './child3a/child3a.component';
import { Child3bComponent } from './child3b/child3b.component';
import { Parent3Component } from './parent3/parent3.component';

@NgModule({
  declarations: [Child3aComponent, Child3bComponent, Parent3Component],
  imports: [
    CommonModule
  ],
  exports: [
    Child3aComponent,
    Child3bComponent,
    Parent3Component
  ]
})
export class Scenario5Module { }
