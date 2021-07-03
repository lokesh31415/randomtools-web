import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tool } from 'src/app/screens/models';
import { randint } from '../../utils';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss'],
})
export class ToolComponent implements OnInit {
  @Input('tool') tool: Tool;

  defaultIcon = 'file_copy';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  getRandomColor() {
    let r = randint(50, 200);
    let g = randint(50, 200);
    let b = randint(50, 200);
    return `rgb(${r}, ${g}, ${b})`;
  }

  getIconStyles() {
    return { color: this.getRandomColor() };
  }

  loadToolPage() {
    this.router.navigateByUrl(this.tool.path, {
      state: { toolId: this.tool.id },
    });
  }
}
