import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Tool } from '../../models';

@Component({
  selector: 'app-pdf-compress',
  templateUrl: './pdf-compress.component.html',
  styleUrls: ['./pdf-compress.component.scss'],
})
export class PdfCompressComponent implements OnInit {
  toolData: Tool;
  constructor(private location: Location) {}

  ngOnInit(): void {
    const routeState = this.location.getState() as {
      [props: string]: any;
      tool: Tool;
    };
    const { tool } = routeState;
    if (tool) this.toolData = tool;
  }
}
