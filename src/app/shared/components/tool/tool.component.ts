import { Component, Input, OnInit } from '@angular/core';
import { Tool } from 'src/app/screens/models';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss'],
})
export class ToolComponent implements OnInit {
  @Input('tool') tool: Tool;

  defaultIcon = 'file_copy';

  constructor() {}

  ngOnInit(): void {}
}
