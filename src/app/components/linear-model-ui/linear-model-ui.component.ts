import { Component, OnInit } from '@angular/core';
import mermaid from 'mermaid';


@Component({
  selector: 'app-linear-model-ui',
  templateUrl: './linear-model-ui.component.html',
  styleUrls: ['./linear-model-ui.component.scss']
})
export class LinearModelUIComponent implements OnInit {



  flowChart: any;
  stringFlowChart: any = "";

  constructor() {
    this.createFlowchart();
  }


  ngOnInit(): void {
    mermaid.initialize({});
  }

  createFlowchart() {
    this.flowChart = [
      "stateDiagram-v2",
      "[*] --> system ",
      "system --> [*]"

      // "A-->B",
      // "B-->C[fa:fa-ban forbidden]",
      // "B-->D(fa:fa-spinner)"
      // "B-->C"
      // "id1[gene 1] --> id2[gene 2]",
      // "id2[gene 2] --x id3[gene 3]",
      // // "id3 & id4 --> id5[Ques 4]",
      // // "id5 --> id6",
      // // "id6[Ques 5] --> id7[End]",
      // // "id6 --> id2",
      // // "id6 --> id1"

    ];
    this.stringFlowChart = this.flowChart.join("\n");
  }

}
