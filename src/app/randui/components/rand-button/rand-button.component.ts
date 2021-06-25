import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rand-button',
  templateUrl: './rand-button.component.html',
  styleUrls: ['./rand-button.component.scss', '../../global/rand-styles.scss'],
})
export class RandButtonComponent implements OnInit {
  @Input() color: 'primary' | 'secondary' | 'danger' | string = 'primary';
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
