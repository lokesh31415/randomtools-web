import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RandColor } from '../../type';

@Component({
  selector: 'rand-button',
  templateUrl: './rand-button.component.html',
  styleUrls: ['./rand-button.component.scss'],
})
export class RandButtonComponent implements OnInit {
  @Input() color: RandColor = 'primary';
  @Output('onClick') onClickEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  getColorClazz() {
    return `rand-${this.color}-btn gradient-${this.color}`;
  }

  onButtonClick(event: any) {
    this.onClickEvent.emit(event);
  }
}
