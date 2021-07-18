import { Component, Input, OnInit } from '@angular/core';
import { ColorScheme } from 'src/app/shared/type';

@Component({
  selector: 'rand-upload-box',
  templateUrl: './rand-upload-box.component.html',
  styleUrls: ['./rand-upload-box.component.scss'],
})
export class RandUploadBoxComponent implements OnInit {
  @Input('color') color: ColorScheme = 'primary';

  constructor() {}

  ngOnInit(): void {}

  getColorSchemeClazz() {
    return this.color ? `upload-area-${this.color}` : '';
  }
}
