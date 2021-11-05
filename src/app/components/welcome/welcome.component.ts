import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  //
  longText = `it is almost, in some cases impossible, to solve equations analytically, old school. Thus, get used to the idea of solving numerically.
  Let's apply the simplest method to solve an ODE!😀`;

  constructor() { }

  ngOnInit(): void {
  }

}
