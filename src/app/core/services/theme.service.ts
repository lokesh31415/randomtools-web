import { Injectable } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _activeTheme: Theme = 'light';

  setTheme(theme: Theme) {
    let clazz = this.getClassName(theme);
    let active_clazz = this.getClassName(this._activeTheme);
    document.body.classList.remove(active_clazz);
    document.body.classList.add(clazz);
    this._activeTheme = theme;
    localStorage.setItem('theme', clazz);
  }
  getActiveTheme() {
    return (
      localStorage.getItem('theme') || this.getClassName(this._activeTheme)
    );
  }

  getClassName(theme: Theme): string {
    return `theme-${theme}`;
  }
}
