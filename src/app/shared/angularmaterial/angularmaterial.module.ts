import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';

const aux = [
  CommonModule,
  MatDividerModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatGridListModule,
  MatSliderModule,
  MatStepperModule,
  MatCardModule
];


@NgModule({
  declarations: [],
  imports: [...aux],
  exports: [...aux]
})
export class AngularmaterialModule { }
