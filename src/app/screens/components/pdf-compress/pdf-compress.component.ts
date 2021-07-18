import { Component, OnDestroy, OnInit } from '@angular/core';
import { Tool, ToolsGroup } from '../../models';
import { ToolsService } from '../../services/tools.service';
import { SelectInputData } from 'src/app/randui/type';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { getToolIdFromUrl } from '../../utils';

@Component({
  selector: 'app-pdf-compress',
  templateUrl: './pdf-compress.component.html',
  styleUrls: ['./pdf-compress.component.scss'],
})
export class PdfCompressComponent implements OnInit, OnDestroy {
  toolData: Tool;
  routerUrlSubscription: Subscription;
  compressSelectData: SelectInputData = [
    {
      id: 'default',
      label: 'Select compression type',
      disabled: true,
    },
    {
      id: 'low',
      label: 'Low compression, high quality',
    },
    {
      id: 'average',
      label: 'Medium compression, average quality',
    },
    {
      id: 'low',
      label: 'High compression, low quality',
    },
  ];

  constructor(
    private toolsService: ToolsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routerUrlSubscription = this.route.url.subscribe((url) => {
      const toolId = getToolIdFromUrl(url);
      if (toolId) this.toolData = this.toolsService.getTool(toolId);
      // calculate related tools
      if (!this.toolData?.hasRelatedTools()) {
        this.toolsService.calculateRelatedTools(this.toolData);
      }
    });
  }

  ngOnDestroy() {
    if (this.routerUrlSubscription) this.routerUrlSubscription.unsubscribe();
  }
}
