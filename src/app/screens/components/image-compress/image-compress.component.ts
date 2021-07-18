import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SelectInputData } from 'src/app/randui/type';
import { Tool } from '../../models';
import { ToolsService } from '../../services/tools.service';
import { getToolIdFromUrl } from '../../utils';

@Component({
  selector: 'app-image-compress',
  templateUrl: './image-compress.component.html',
  styleUrls: ['./image-compress.component.scss'],
})
export class ImageCompressComponent implements OnInit {
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
