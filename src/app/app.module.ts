import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { LinechartComponent } from './linechart/linechart.component';
// import { ChartsModule } from 'ng2-charts';
import { Linechartv2Component } from './linechartv2/linechartv2.component';

import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
import { AngularmaterialModule } from './shared/angularmaterial/angularmaterial.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LinearModelUIComponent } from './components/linear-model-ui/linear-model-ui.component';
import { ReactiveFormsModule } from '@angular/forms';

PlotlyModule.plotlyjs = PlotlyJS;


@NgModule({
  declarations: [
    AppComponent,
    Linechartv2Component,
    LinearModelUIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlotlyModule,
    AngularmaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
