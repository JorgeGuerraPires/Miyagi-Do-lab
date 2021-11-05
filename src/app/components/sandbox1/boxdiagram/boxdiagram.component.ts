import { Component, OnInit } from '@angular/core';
import mermaid from 'mermaid';

@Component({
  selector: 'app-boxdiagram',
  templateUrl: './boxdiagram.component.html',
  styleUrls: ['./boxdiagram.component.scss']
})
export class BoxdiagramComponent implements OnInit {


  flowChart: any;
  stringFlowChart: any = "";

  constructor() {
    this.createFlowchart();
  }


  ngOnInit(): void {
    console.log("init mermaid");
    mermaid.initialize({});
  }

  createFlowchart() {
    this.flowChart = [
      "stateDiagram-v2",
      "[*] --> system ",
      "system --> [*]"
    ];

    this.stringFlowChart = this.flowChart.join("\n");
  }

  loadModelDiagram() {
    mermaid.initialize({});
  }
}