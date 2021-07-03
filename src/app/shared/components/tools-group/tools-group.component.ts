import { Component, Input, OnInit } from '@angular/core';
import { Tool, ToolsGroup } from 'src/app/screens/models';
import { ToolsService } from 'src/app/screens/services/tools.service';

@Component({
  selector: 'app-tools-group',
  templateUrl: './tools-group.component.html',
  styleUrls: ['./tools-group.component.scss'],
})
export class ToolsGroupComponent implements OnInit {
  @Input('group') group: ToolsGroup;

  constructor(private toolsService: ToolsService) {}

  ngOnInit(): void {}

  getTool(id: string): Tool {
    const tool = this.toolsService.toolsMap[id];
    return tool;
  }

  isTool(id: string): boolean {
    const tool = this.toolsService.toolsMap[id];
    return !!tool;
  }
}
