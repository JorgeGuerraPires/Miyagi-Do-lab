import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { LayoutComponent } from './shared/layout/layout.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularmaterialModule } from './shared/angularmaterial/angularmaterial.module';
import { Model1Component } from './components/sandbox1/model1/model1.component';
import { LinearComponent } from './mathematics/utils/plotting/linear/linear.component';

//Plotting related
import { PlotlyModule } from 'angular-plotly.js';
import * as PlotlyJS from 'plotly.js-dist-min';
import { ControlpanelComponent } from './components/sandbox1/controlpanel/controlpanel.component';
PlotlyModule.plotlyjs = PlotlyJS;


//Forms related
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BoxdiagramComponent } from './components/sandbox1/boxdiagram/boxdiagram.component';

@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    HeaderComponent,
    WelcomeComponent,
    Model1Component,
    LinearComponent,
    ControlpanelComponent,
    BoxdiagramComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularmaterialModule,
    //Plot related
    PlotlyModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
