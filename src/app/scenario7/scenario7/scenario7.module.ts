import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sibling1Component } from '../sibling1/sibling1.component';
import { Sibling2Component } from '../sibling2/sibling2.component';
import { Parent7Component } from '../parent7/parent7.component';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Sibling1Component, Sibling2Component, Parent7Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
  Sibling1Component,
  Sibling2Component,
  Parent7Component
  ],
  providers: [
    UserService
  ]
})
export class Scenario7Module { }
