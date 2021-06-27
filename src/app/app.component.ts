import { Component, OnInit } from '@angular/core';
import { ThemeService } from './core/services/theme.service';
import { ToolsService } from './screens/services/tools.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private themeService: ThemeService,
    private toolsService: ToolsService
  ) {}

  ngOnInit(): void {
    this.themeService.setTheme('light');
    this.toolsService.loadToolsData().subscribe(
      (status) => {
        // TODO:do something with status
      },
      (err) => {
        // FIXME: handle errors
      }
    );
  }
}
