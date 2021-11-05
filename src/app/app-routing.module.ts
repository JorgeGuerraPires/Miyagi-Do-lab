import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Model1Component } from './components/sandbox1/model1/model1.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [{ path: "", component: WelcomeComponent }, { path: "model1", component: Model1Component }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
