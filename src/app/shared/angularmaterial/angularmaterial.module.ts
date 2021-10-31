import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper'
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatButtonModule, MatToolbarModule, MatSelectModule, MatGridListModule, MatIconModule, MatInputModule,
    MatStepperModule,
    MatDividerModule

  ],
  exports: [MatSliderModule,
    MatButtonModule,
    MatToolbarModule, MatSelectModule, MatGridListModule, MatIconModule, MatInputModule,
    MatStepperModule, MatDividerModule]
})
export class AngularmaterialModule { }
