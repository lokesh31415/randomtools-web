import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { RandStyleService } from '../../services';
import { RandColor, SelectInputData, SelectInputItem } from '../../type';

@Component({
  selector: 'rand-select',
  templateUrl: './rand-select.component.html',
  styleUrls: ['./rand-select.component.scss'],
})
export class RandSelectComponent implements OnInit {
  // mapped to select input's name attribute
  @Input('name') name: string = 'Select Input';
  // mapped to select input's title attribute
  @Input('title') title: string = 'Select Input';
  // select input data to display
  @Input('data') data: SelectInputData = [];
  @Input('selectedItemId') activeItemId: string;
  @Input('selectedItemIdx') activeItemIdx: number;
  @Input('selectedItem') activeItem: SelectInputItem;
  // color of the select
  @Input('color') color: RandColor = 'primary';

  opened: boolean = false;

  constructor(public randStyleService: RandStyleService) {}

  ngOnInit() {}

  getSelectColorClazz() {
    return `rand-${this.color}-select`;
  }

  toggleOptionsPanel() {
    this.opened = !this.opened;
  }
}
