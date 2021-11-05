import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Parameters } from "../interface/parameters"
import { Uicontrol } from '../interface/uicontrol';

@Component({
  selector: 'app-controlpanel',
  templateUrl: './controlpanel.component.html',
  styleUrls: ['./controlpanel.component.scss']
})
export class ControlpanelComponent implements OnInit {

  @Output() output = new EventEmitter<Parameters>();

  parameters: Parameters =
    {
      simulationLabel: "",
      simulationTimeSpan: 0,
      alfa: 1
    };
  @Output() parentFun: EventEmitter<any> = new EventEmitter();

  //UI
  @Input() uicontrol: Uicontrol = { simulationButton: true };


  constructor() { }

  ngOnInit(): void {
  }

  runSimulations() {
    this.output.emit(this.parameters);
  }

  /**UI related*/
  //Slider related
  formatLabel(value: number) {
    // const aux = value;
    // this.value = aux;
    return value;
  }

  pitch(event: any) {
    this.parameters.simulationTimeSpan = event.value
  }

  pitchAlfa(event: any) {
    this.parameters.alfa = event.value
  }



}

