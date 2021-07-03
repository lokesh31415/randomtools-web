import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Tool, ToolsGroup } from '../../models';
import { ToolsService } from '../../services/tools.service';

@Component({
  selector: 'app-pdf-compress',
  templateUrl: './pdf-compress.component.html',
  styleUrls: ['./pdf-compress.component.scss'],
})
export class PdfCompressComponent implements OnInit {
  toolData: Tool;
  constructor(private location: Location, private toolsService: ToolsService) {}

  ngOnInit(): void {
    const routeState = this.location.getState() as {
      [props: string]: any;
      toolId: string;
    };
    const { toolId } = routeState;
    if (toolId) this.toolData = this.toolsService.toolsMap[toolId];
    if (this.toolData?.relatedTools?.tools?.length == 0) {
      this.toolsService.calculateRelatedTools(this.toolData);
    }
  }

  hasRelatedTools() {
    return this.toolData?.relatedTools?.tools?.length;
  }
}
