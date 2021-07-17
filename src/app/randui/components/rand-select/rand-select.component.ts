import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { RandStyleService } from '../../services';
import { RandColor, SelectInputData, SelectInputItem } from '../../type';

@Component({
  selector: 'rand-select',
  templateUrl: './rand-select.component.html',
  styleUrls: ['./rand-select.component.scss'],
})
export class RandSelectComponent implements OnInit {
  // mapped to select input's title attribute
  @Input('title') title: string = 'Select Input';
  // select input data to display
  @Input('data') data: SelectInputData = [];
  @Input('selectedItemIdx') activeItemIdx: number = 0;
  // color of the select
  @Input('color') color: RandColor = 'primary';

  @Output('itemSelected') itemSelectedEvent =
    new EventEmitter<SelectInputItem>();

  opened: boolean = false;

  constructor(public randStyleService: RandStyleService) {}

  ngOnInit() {}

  getSelectColorClazz() {
    return `rand-${this.color}-select`;
  }

  toggleOptionsPanel() {
    this.opened = !this.opened;
  }

  optionSelected(item: SelectInputItem, idx: number) {
    this.activeItemIdx = idx;
    this.toggleOptionsPanel();
    this.itemSelectedEvent.emit(item);
  }
}
