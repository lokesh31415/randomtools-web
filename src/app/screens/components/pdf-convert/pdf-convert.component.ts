import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SelectInputData } from 'src/app/randui/type';
import { Tool } from '../../models';
import { ToolsService } from '../../services/tools.service';
import { getToolIdFromUrl } from '../../utils';

@Component({
  selector: 'app-pdf-convert',
  templateUrl: './pdf-convert.component.html',
  styleUrls: ['./pdf-convert.component.scss'],
})
export class PdfConvertComponent implements OnInit {
  toolData: Tool;
  routerUrlSubscription: Subscription;
  covertSelectData: SelectInputData = [
    {
      id: 'label',
      label: 'Convert To',
      disabled: true,
    },
    {
      id: 'toword',
      label: 'Word',
    },
    {
      id: 'toppt',
      label: 'Powerpoint',
    },
    {
      id: 'tojpg',
      label: 'JPG',
    },
    {
      id: 'topng',
      label: 'PNG',
    },
    {
      id: 'tohtml',
      label: 'Html',
    },
  ];
  constructor(
    private toolsService: ToolsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routerUrlSubscription = this.route.url.subscribe((url) => {
      this.toolData = this.toolsService.getToolFromUrl(url);
    });
  }

  ngOnDestroy() {
    if (this.routerUrlSubscription) this.routerUrlSubscription.unsubscribe();
  }
}
