import { Injectable } from '@angular/core';

export type Theme = 'light' | 'dark';

/**
 * Theme service - manages app's theme.
 * provide methods to change or to get currently active theme inormation.
 */
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _activeTheme: Theme = 'light';

  /**
   * Sets app's theme
   * @param theme theme name
   */
  setTheme(theme: Theme) {
    let clazz = this.getClassName(theme);
    let active_clazz = this.getClassName(this._activeTheme);
    document.body.classList.remove(active_clazz);
    document.body.classList.add(clazz);
    this._activeTheme = theme;
    localStorage.setItem('theme', theme);
  }

  /**
   * @returns active theme name/id
   */
  getActiveTheme(): Theme {
    return (localStorage.getItem('theme') as Theme) || this._activeTheme;
  }

  /**
   * To get active theme's class name
   * @param theme active theme name/id
   * @returns active theme's class name
   */
  getClassName(theme: Theme): string {
    return `theme-${theme}`;
  }
}
