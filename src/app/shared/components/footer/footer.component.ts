import { Component, Input, OnInit } from '@angular/core';
import { ColorScheme, COLOR_SCHEMES } from '../../type';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input('color') colorScheme: ColorScheme = 'primary';

  constructor() {}

  ngOnInit(): void {}

  getSVGFillColor() {
    if (!this.colorScheme || !COLOR_SCHEMES.includes(this.colorScheme)) {
      this.colorScheme = 'primary';
    }
    return { fill: `url(#g-${this.colorScheme})` };
  }
}
