import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RandStyleService {
  constructor() {}

  getColorClazz(color: string) {
    return `rand-${color}-color`;
  }

  getBackgroundColorClazz(color: string) {
    return `rand-${color}-background-color`;
  }
}
